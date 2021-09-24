export class Dimension {
    constructor(
        public width: number,
        public height: number,
    ) {}  
}

export class Position {
    constructor(
        public x: number,
        public y: number,
    ) {}
}

export class Crop {
    
    constructor(
        private _top: number,
        private _right: number,
        private _bottom: number,
        private _left: number
    ) {}

    get top(): number { return this._top; }
    get right(): number { return this._right; }
    get bottom(): number { return this._bottom; }
    get left(): number { return this._left; }

    set top(value: number) { this._top = this.sanitize(value); }
    set right(value: number) { this._right = this.sanitize(value); }
    set bottom(value: number) { this._bottom = this.sanitize(value); }
    set left(value: number) { this._left = this.sanitize(value); }

    private sanitize(value: number): number {
        if (value < 0) value = 0;
        if (value > 32) value = 32;
        return value;
    }

}

export class Scale {

    private _factor: number = 1;

    constructor(
        value: number,
    ) {
        this.factor = value;
    }

    get factor(): number {
        return this._factor;
    }

    set factor(val: number) {
        if (val < 0) val = 0;
        this._factor = val;
    }

}