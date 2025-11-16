// FridgeList.js (replace your existing file with this)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Your firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAp7TebsGhYqoMv6IER8XZ-fwyqwi9KGt4",
  authDomain: "fridge-mate-31e97.firebaseapp.com",
  projectId: "fridge-mate-31e97",
  storageBucket: "fridge-mate-31e97.firebasestorage.app",
  messagingSenderId: "543736415860",
  appId: "1:543736415860:web:312b6729c79af1221d7321"
};

// Initialize
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
let userUID = null;
let fridgesUnsub = null; // will hold the firestore listener unsubscribe

const authArea = document.getElementById('authArea');
const fridgesContainer = document.getElementById('fridgesContainer');
const createFridgeCardEl = document.getElementById('createFridgeBtnCard'); // insertion point

// Utility: escape HTML to avoid injection
function escapeHtml(str) {
  return String(str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// UI rendering for auth area
function getDisplayNameOrEmail(user) {
  if (!user) return '';
  if (user.displayName && user.displayName.trim() !== '') return user.displayName;
  if (user.email) {
    const local = user.email.split('@')[0];
    return local;
  }
  return 'User';
}

function renderSignedOut() {
  authArea.innerHTML = `
    <li class="nav-item me-2">
      <a class="btn btn-outline-light" href="/signin.html">Sign in</a>
    </li>
    <li class="nav-item">
      <a class="btn btn-light" href="/signup.html">Sign up</a>
    </li>
  `;
  stopFridgeListener();
  clearFridgeCards();
}

function renderSignedIn(user) {
  const name = getDisplayNameOrEmail(user);
  authArea.innerHTML = `
    <li class="nav-item me-2 d-flex align-items-center">
      <span class="navbar-text text-white me-2">Hi, <strong>${escapeHtml(name)}</strong></span>
    </li>
    <li class="nav-item">
      <button id="logoutBtn" class="btn btn-light">Log out</button>
    </li>
  `;

  document.getElementById('logoutBtn').addEventListener('click', async () => {
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.disabled = true;
    logoutBtn.textContent = 'Signing out...';
    try {
      await signOut(auth);
    } catch (err) {
      console.error('Error signing out:', err);
      logoutBtn.disabled = false;
      logoutBtn.textContent = 'Log out';
      alert('Unable to sign out. Check console for details.');
    }
  });

  // start listening to fridges once signed in
  startFridgeListener();
}

/* ---------- Firestore membership check & rendering ---------- */

// Determine if the current user (uid) is present in allowedUsers.
// allowedUsers might be:
// - an object where keys are arbitrary and values are objects that have a userId field
// - an array of objects with userId fields
// - undefined/null
function isUserAllowed(allowedUsers, uid) {
  if (!uid) return false;
  if (!allowedUsers) return false;
  // array case
  if (Array.isArray(allowedUsers)) {
    return allowedUsers.some(item => item && item.userId === uid);
  }
  // object/map-like case
  if (typeof allowedUsers === 'object') {
    return Object.values(allowedUsers).some(item => item && item.userId === uid);
  }
  return false;
}

function getMembersList(allowedUsers) {
  if (!allowedUsers) return [];
  let vals = [];
  if (Array.isArray(allowedUsers)) {
    vals = allowedUsers;
  } else if (typeof allowedUsers === 'object') {
    vals = Object.values(allowedUsers);
  }
  // map to display names if available or fallback to 'Member'
  return vals.map(v => (v && (v.displayName || v.email || v.userId)) || 'Member');
}

function getMemberCount(allowedUsers) {
  if (!allowedUsers) return 0;
  if (Array.isArray(allowedUsers)) return allowedUsers.length;
  if (typeof allowedUsers === 'object') return Object.keys(allowedUsers).length;
  return 0;
}

function formatUpdatedText(data) {
  // try to extract a timestamp-like field (updatedAt, updated, lastUpdated)
  const ts = data && (data.updatedAt || data.updated || data.lastUpdated || data.createdAt || data.created);
  if (!ts) return '';
  // Firestore Timestamp object typically has toDate() method
  try {
    const date = (typeof ts.toDate === 'function') ? ts.toDate() : new Date(ts);
    if (isNaN(date)) return '';
    // simple relative: if within 24h show 'Today', else show locale date
    const diffMs = Date.now() - date.getTime();
    const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    if (days === 0) return `Updated: today`;
    if (days === 1) return `Updated: 1 day ago`;
    return `Updated: ${days} days ago`;
  } catch (e) {
    return '';
  }
}

// Build DOM for a fridge card (anchor wrapping a .card)
// returns a DOM node ready to append
function buildFridgeCard(docId, data) {
  const anchor = document.createElement('a');
  anchor.href = `Fridge.html?id=${encodeURIComponent(docId)}`;
  anchor.className = 'text-decoration-none text-body';

  const card = document.createElement('div');
  card.className = 'card mb-3 w-100 shadow-sm';

  const body = document.createElement('div');
  body.className = 'card-body d-flex justify-content-between align-items-center';

  const left = document.createElement('div');
  const title = document.createElement('h5');
  title.className = 'card-title mb-1';
  title.textContent = data && data.name ? data.name : 'Unnamed Fridge';
  left.appendChild(title);

  const members = getMembersList(data && data.allowedUsers);
  const meta = document.createElement('p');
  meta.className = 'card-text text-muted mb-0';
  if (members.length > 0) {
    const showNames = members.slice(0, 3).map(s => escapeHtml(s)).join(', ');
    meta.innerHTML = `Shared with: ${showNames}${members.length > 3 ? ' — +' + (members.length - 3) + ' more' : ''} ${formatUpdatedText(data) ? '— ' + escapeHtml(formatUpdatedText(data)) : ''}`;
  } else {
    meta.textContent = formatUpdatedText(data) || '';
  }
  left.appendChild(meta);

  const right = document.createElement('div');
  right.className = 'text-end';
  const badge = document.createElement('span');
  badge.className = 'badge bg-secondary rounded-pill';
  badge.textContent = `${getMemberCount(data && data.allowedUsers)} members`;
  right.appendChild(badge);

  body.appendChild(left);
  body.appendChild(right);
  card.appendChild(body);
  anchor.appendChild(card);
  return anchor;
}

/* ---------- Listener lifecycle ---------- */

function startFridgeListener() {
  if (fridgesUnsub) {
    // already listening
    return;
  }
  const fridgesCol = collection(db, 'Fridges');
  fridgesUnsub = onSnapshot(fridgesCol, (snapshot) => {
    // clear existing cards
    clearFridgeCards();

    snapshot.forEach(doc => {
      const data = doc.data();
      // only render fridges where the current user is listed in allowedUsers
      if (userUID && isUserAllowed(data && data.allowedUsers, userUID)) {
        const cardNode = buildFridgeCard(doc.id, data);
        // insert above the Create card (append to container keeps all cards before the Create button)
        fridgesContainer.appendChild(cardNode);
      }
    });
  }, (err) => {
    console.error('Fridges onSnapshot error:', err);
  });
}

function stopFridgeListener() {
  if (fridgesUnsub) {
    fridgesUnsub(); // unsubscribe
    fridgesUnsub = null;
  }
}

function clearFridgeCards() {
  if (fridgesContainer) fridgesContainer.innerHTML = '';
}

/* ---------- Auth handling ---------- */

// Listen for auth changes
onAuthStateChanged(auth, (user) => {
  if (user) {
    userUID = user.uid;
    renderSignedIn(user);
  } else {
    userUID = null;
    renderSignedOut();
  }
});

/* ---------- Create fridge form handling ---------- */
const modalEl = document.getElementById('createFridgeModal');
if (modalEl) {
  modalEl.addEventListener('shown.bs.modal', () => {
    const nameInput = document.getElementById('fridgeName');
    if (nameInput) nameInput.focus();
  });
}

const form = document.getElementById('createFridgeForm');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const nameInput = document.getElementById('fridgeName');
    const name = nameInput.value.trim();
    if (!name) {
      nameInput.classList.add('is-invalid');
      return;
    }
    nameInput.classList.remove('is-invalid');

    try {
      // Add a new document with a generated id.
      // Setting allowedUsers to an object with current user as a single member.
      await addDoc(collection(db, "Fridges"), {
        name: name,
        allowedUsers: {
          user_1: { userId: userUID, displayName: getDisplayNameOrEmail(auth.currentUser) }
        },
        createdAt: new Date()
      });

      // close modal if bootstrap is used (we don't assume jQuery)
      const modal = bootstrap.Modal.getInstance(modalEl);
      if (modal) modal.hide();

      // clear input
      if (nameInput) nameInput.value = '';
      // UI will update from onSnapshot automatically
    } catch (err) {
      console.error('Error creating fridge:', err);
      alert('Unable to create fridge. Check console for details.');
    }
  });
}
