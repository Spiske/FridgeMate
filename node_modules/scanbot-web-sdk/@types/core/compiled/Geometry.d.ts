import type { DeepPartial } from "./utils";
import { Point } from "./utils";
/**
Represents a line segment in 2D space.
*/
export declare class LineSegmentInt {
    /**
    Start point of the segment
    */
    readonly start: Point;
    /**
    End point of the segment
    */
    readonly end: Point;
    /** @param source {@displayType `DeepPartial<LineSegmentInt>`} */
    constructor(source?: DeepPartial<LineSegmentInt>);
}
/**
Represents a line segment in 2D space.
*/
export declare class LineSegmentFloat {
    /**
    Start point of the segment
    */
    readonly start: Point;
    /**
    End point of the segment
    */
    readonly end: Point;
    /** @param source {@displayType `DeepPartial<LineSegmentFloat>`} */
    constructor(source?: DeepPartial<LineSegmentFloat>);
}
/**
Aspect ratio is the ratio of the width to the height of an image or screen.
*/
export declare class AspectRatio {
    /**
    Width component of the aspect ratio.
    @defaultValue 1.0;
    */
    readonly width: number;
    /**
    Height component of the aspect ratio.
    @defaultValue 1.0;
    */
    readonly height: number;
    /** @param source {@displayType `DeepPartial<AspectRatio>`} */
    constructor(source?: DeepPartial<AspectRatio>);
}
