/**
Determines the visibility mode for the document capturing user guidance labels.

- `ENABLED`:
   Enabled for both 'auto snapping' and 'manual snapping' modes.
- `AUTO_CAPTURE_ONLY`:
   Enabled only for the 'auto snapping' mode.
- `DISABLED`:
   Disabled for both 'auto snapping' and 'manual snapping' modes.
*/
export type UserGuidanceVisibility = 
/**
  Enabled for both 'auto snapping' and 'manual snapping' modes.
  */
"ENABLED"
/**
  Enabled only for the 'auto snapping' mode.
  */
 | "AUTO_CAPTURE_ONLY"
/**
  Disabled for both 'auto snapping' and 'manual snapping' modes.
  */
 | "DISABLED";
/** @hidden */
export declare const UserGuidanceVisibilityValues: ReadonlyArray<UserGuidanceVisibility>;
