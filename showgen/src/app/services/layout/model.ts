import { Crop, Position, Scale } from "../common";

export class Box {
    constructor(
        public name: string,
        public enabled: boolean,
        public source: string,
        public position: Position,
        public size: Scale,
        public enableCrop: boolean,
        public crop: Crop,
    ) {}
}

export abstract class Layout {
    constructor(
        public id: string,
        public name: string,
    ) {}
}

export class Media {
    constructor(
        public source: string,
        public background: boolean,
    ) {}
}

export class SuperSource extends Layout {
    constructor(
        public id: string,
        public name: string,
        public boxes: Box[],
        public media: Media,
    ) {
        super(id, name);
    }
}
