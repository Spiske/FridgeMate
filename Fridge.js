// fridge photo
const fridgeCameraBtn = document.getElementById('fridgeCameraBtn');
const fridgePhoto = document.getElementById('fridgePhoto');
fridgeCameraBtn.addEventListener('click', () => fridgePhoto.click());

// barcode file
const barcodeCameraBtn = document.getElementById('barcodeCameraBtn');
const barcodeFile = document.getElementById('barcodeFile');
const barcodeFileName = document.getElementById('barcodeFileName');

barcodeCameraBtn.addEventListener('click', () => barcodeFile.click());

barcodeFile.addEventListener('change', (e) => {
    const f = e.target.files[0];
    barcodeFileName.textContent = f ? f.name : 'No file chosen';
});

// Update 'Add to Database & Fridge' button text when quantity changes on fridge form
const fridgeQty = document.getElementById('fridgeQuantity');
const dbAddAndFridgeBtn = document.getElementById('dbAddAndFridge');

const updateDbAddLabel = () => {
    const val = (fridgeQty && fridgeQty.value) ? parseInt(fridgeQty.value, 10) : 1;
    const safe = (Number.isInteger(val) && val > 0) ? val : 1;
    dbAddAndFridgeBtn.textContent = `Add to Database & Fridge (qt: ${safe})`;
};

if (fridgeQty) {
    fridgeQty.addEventListener('input', updateDbAddLabel);
    updateDbAddLabel();
}

// Basic form submit prevention (replace with real submit logic)
document.getElementById('fridgeForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Add to Fridge submitted — wire this to your backend.');
});

document.getElementById('dbForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Add to Database submitted — wire this to your backend.');
});

document.getElementById('dbAddAndFridge').addEventListener('click', () => {
    alert('Add to Database & Fridge clicked — wire this to your backend.');
});

document.getElementById('viewDbItems').addEventListener('click', () => {
    alert('View all Database Items — implement navigation to DB list.');
});