export enum Op {
    ADD = "+",
    SUB = "-",
    MUL = "*",
    DIV = "/",
}

export class Calc {
    constructor(
        public left: string | number | Calc,
        public op: Op,
        public right: string | number | Calc
    ) {}

    public toString(): string {
        return "calc((" + this.left + ") " + this.op + " (" + this.right + "))";
    }
}

export function calc(left: string | number | Calc, op: Op, right: string | number | Calc) {
    return new Calc(left, op, right);
}
