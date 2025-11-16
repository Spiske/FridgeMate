import { DeepPartial, LineSegmentFloat, Point } from "../../core-types";
export declare class MagneticLine {
    start: Point;
    end: Point;
    constructor(start: Point, end: Point);
    static fromLineSegments(input: DeepPartial<LineSegmentFloat>[]): MagneticLine[];
    static fromLineSegment(input: DeepPartial<LineSegmentFloat>): MagneticLine;
}
