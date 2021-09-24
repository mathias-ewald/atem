import { Crop, Position, Scale } from "../common";
import { Box, Layout, Media, SuperSource } from "./model";

export const layouts: Layout[] = [
    new SuperSource(
        "1",
        "Layout 1",
        [
            new Box(
                "Box 1",
                true, 
                "camera1",
                new Position(0, 0),
                new Scale(0.5),
                false,
                new Crop(0, 0, 0, 0)
            ), 
            new Box(
                "Box 2",
                false,
                "camera2",
                new Position(10, -10),
                new Scale(0.3),
                false,
                new Crop(0, 0, 0, 0)
            ),
            new Box(
                "Box 3",
                false,
                "camera3",
                new Position(-12, -10),
                new Scale(0.1),
                false,
                new Crop(0, 0, 0, 0)
            ), 
            new Box(
                "Box 4",
                false,
                "camera4",
                new Position(10, 12),
                new Scale(0.1),
                false,
                new Crop(0, 0, 0, 0)
            ), 
        ],
        new Media("mp1", true)
    ),
];