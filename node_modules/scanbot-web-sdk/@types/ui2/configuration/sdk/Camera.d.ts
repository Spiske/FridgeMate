/**
The size of the image from camera which would be sent to the scanner for live scanning.

- `AUTO`:
   Select to the image resolution automatically based on device specifics.
- `FULL_HD`:
   The image is in Full HD resolution. 1920x1080 pixels or close to it.
- `UHD`:
   The image is in UHD resolution. 3840x2160 pixels or close to it.
*/
export type CameraLiveScannerResolution = 
/**
  Select to the image resolution automatically based on device specifics.
  */
"AUTO"
/**
  The image is in Full HD resolution. 1920x1080 pixels or close to it.
  */
 | "FULL_HD"
/**
  The image is in UHD resolution. 3840x2160 pixels or close to it.
  */
 | "UHD";
/** @hidden */
export declare const CameraLiveScannerResolutionValues: ReadonlyArray<CameraLiveScannerResolution>;
