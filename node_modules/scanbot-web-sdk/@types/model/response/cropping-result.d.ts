import { Polygon } from "../../utils/dto/Polygon";
import type { Image } from "../../core-types";
export declare class CroppingResult {
    image: Image;
    polygon: Polygon;
    rotations: number;
}
