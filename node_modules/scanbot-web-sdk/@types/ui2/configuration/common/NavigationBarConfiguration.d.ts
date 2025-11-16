/**
The visual mode used for the navigation bar icons. Android only.

- `DARK`:
   Display all icons in the navigation bar in black.
- `LIGHT`:
   Display all icons in the navigation bar in white.
- `HIDDEN`:
   Hide the navigation bar.
*/
export type NavigationBarMode = 
/**
  Display all icons in the navigation bar in black.
  */
"DARK"
/**
  Display all icons in the navigation bar in white.
  */
 | "LIGHT"
/**
  Hide the navigation bar.
  */
 | "HIDDEN";
/** @hidden */
export declare const NavigationBarModeValues: ReadonlyArray<NavigationBarMode>;
