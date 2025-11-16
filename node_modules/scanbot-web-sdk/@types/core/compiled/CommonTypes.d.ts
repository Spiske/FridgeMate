/**
Scanners typically can produce better results from a single image if they are allowed to spend a longer time analyzing it.
On the other hand, scanners can produce even better results if they can analyze multiple images of the same subject and cross-check and combine the results.
The processing mode tells the scanner whether to optimize for single or multiple images of a subject.

- `LIVE`:
   In live mode input images are expected to come from a video source like a camera.
   Scanners in live mode typically spend little time on each image and are able to quickly analyze multiple images and combine the individual image results into a final result.
   Individual results from a particular image may be less accurate than running the scanner in single-shot mode on that frame, but after aggregating a few images of the same subject, the final result becomes much more accurate.
- `SINGLE_SHOT`:
   In single-shot the scanner tries to extract the maximum amount of information possible from each input image. The scanner typically spends much longer on analyzing the image to ensure that all available information has been extracted.
- `AUTO`:
   The scanner chooses live or single-shot mode based on the source of the image. An image constructed with RawImageLoadOptions.liveSource equal to true will be processed in live mode, otherwise it will be processed in single-shot mode.
   On Android liveSource is automatically set to true if the ImageRef is created from Nv21 image data.
   On iOS liveSource is automatically set to true if the ImageRef is created from a CMSampleBuffer.
*/
export type ProcessingMode = 
/**
In live mode input images are expected to come from a video source like a camera.
Scanners in live mode typically spend little time on each image and are able to quickly analyze multiple images and combine the individual image results into a final result.
Individual results from a particular image may be less accurate than running the scanner in single-shot mode on that frame, but after aggregating a few images of the same subject, the final result becomes much more accurate.
*/
"LIVE" | 
/**
In single-shot the scanner tries to extract the maximum amount of information possible from each input image. The scanner typically spends much longer on analyzing the image to ensure that all available information has been extracted.
*/
"SINGLE_SHOT" | 
/**
The scanner chooses live or single-shot mode based on the source of the image. An image constructed with RawImageLoadOptions.liveSource equal to true will be processed in live mode, otherwise it will be processed in single-shot mode.
On Android liveSource is automatically set to true if the ImageRef is created from Nv21 image data.
On iOS liveSource is automatically set to true if the ImageRef is created from a CMSampleBuffer.
*/
"AUTO";
/** @hidden */
export declare const ProcessingModeValues: ReadonlyArray<ProcessingMode>;
