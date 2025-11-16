/**
Image rotation.

- `NONE`:
   No rotation.
- `CLOCKWISE_90`:
   90 degrees clockwise rotation.
- `CLOCKWISE_180`:
   180 degrees rotation.
- `COUNTERCLOCKWISE_90`:
   90 degrees counterclockwise rotation.
*/
export type ImageRotation = 
/**
No rotation.
*/
"NONE" | 
/**
90 degrees clockwise rotation.
*/
"CLOCKWISE_90" | 
/**
180 degrees rotation.
*/
"CLOCKWISE_180" | 
/**
90 degrees counterclockwise rotation.
*/
"COUNTERCLOCKWISE_90";
/** @hidden */
export declare const ImageRotationValues: ReadonlyArray<ImageRotation>;
/**
Location of the image origin in the image coordinate system.

- `TOP_LEFT`:
   Origin is at the top left corner of the image.
- `TOP_RIGHT`:
   Origin is at the top right corner of the image.
- `BOTTOM_LEFT`:
   Origin is at the bottom left corner of the image.
- `BOTTOM_RIGHT`:
   Origin is at the bottom right corner of the image.
*/
export type ImageOrigin = 
/**
Origin is at the top left corner of the image.
*/
"TOP_LEFT" | 
/**
Origin is at the top right corner of the image.
*/
"TOP_RIGHT" | 
/**
Origin is at the bottom left corner of the image.
*/
"BOTTOM_LEFT" | 
/**
Origin is at the bottom right corner of the image.
*/
"BOTTOM_RIGHT";
/** @hidden */
export declare const ImageOriginValues: ReadonlyArray<ImageOrigin>;
