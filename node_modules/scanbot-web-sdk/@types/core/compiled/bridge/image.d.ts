import type { ConsumeType } from "../../bridge/utils";
import { NonPartiallyConstructible, RawImage, WrappedImage } from "../utils";
export type RawImageInput = ImageData | ArrayBuffer | Uint8Array | RawImage;
type ImageInput = Image | {
    ___image_data: WrappedImage;
} | RawImageInput;
/**
 * Represents an image in a format that can be consumed by the WASM module.
 */
export declare class Image extends NonPartiallyConstructible {
    /**
     * This constructor should not be used directly, use {@link Image.fromUrl}, {@link Image.fromImageData} or {@link Image.fromEncodedBinaryData} instead.
     * @param data  - either an ImageData object,
     *              - an ArrayBuffer or Uint8Array containing the binary data of an encoded image (most common image formats such as PNG and JPEG are supported),
     *              - or a RawImage, which are obtained by several SDK functions.
     * @internal
     * */
    constructor(data: ImageInput);
    private ___image_data;
    /**
     * This property should not be used directly.
     * Use {@link toJpeg} if you want to display or download the image.
     * If you want to pass this image to a ScanbotSDK function, just pass the Image object directly. No further conversion is necessary.
     * @internal
     * */
    get __image_data(): WrappedImage;
    /**
     * Load an JPEG or PNG image from a URL.
     */
    static fromUrl(url: string): Promise<Image>;
    static fromImageData(imageData: ImageData): Image;
    /**
     * @param data The binary data of the encoded image. Data must be in JPEG or PNG format.
     *             Note that you **cannot** pass the binary data of an ImageData object here, because ImageData.data are
     *             raw pixel values, not JPEG or PNG encoded data. For ImageData objects, use {@link Image.fromImageData} instead.
     */
    static fromEncodedBinaryData(data: ArrayBuffer | Uint8Array): Image;
    /** @internal */
    static fromWrappedImage(input: WrappedImage): Image;
    /**
     * Converts the image to a JPEG image. The binary data of the JPEG image is returned as a Uint8Array.
     * Note that the ScanbotSDK must be successfully initialized before calling this method.
     * @param quality The quality of the JPEG image, from 0 to 100, where larger numbers mean better quality but also larger file size.
     * @param consumeImage Controls if the image can still be used after calling this method, or if it will be consumed by the method. See {@link ConsumeType} for more details.
     */
    toJpeg(quality?: number, consumeImage?: ConsumeType): Promise<Uint8Array>;
}
export {};
