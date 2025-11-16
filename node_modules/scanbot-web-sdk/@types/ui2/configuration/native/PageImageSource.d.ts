/**
The source of an image.

- `UNDEFINED`:
   The source of the image is not known.
- `MANUAL_SNAP`:
   The image was captured manually.
- `AUTO_SNAP`:
   The image was captured automatically.
- `IMPORTED`:
   The image originates from the photo/media gallery.
*/
export type PageImageSource = 
/**
  The source of the image is not known.
  */
"UNDEFINED"
/**
  The image was captured manually.
  */
 | "MANUAL_SNAP"
/**
  The image was captured automatically.
  */
 | "AUTO_SNAP"
/**
  The image originates from the photo/media gallery.
  */
 | "IMPORTED";
/** @hidden */
export declare const PageImageSourceValues: ReadonlyArray<PageImageSource>;
