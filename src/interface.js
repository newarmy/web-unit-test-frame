
export default class MathObj {
    constructor(opt) {
        this.a = opt.a;
        this.b = opt.b;
    }
    add() {
        return this.a + this.b;
    }
    jian() {
        return this.a - this.b;
    }
}