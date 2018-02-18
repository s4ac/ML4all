class Trainer{
    /**
     * a traner object with a given position and a label
     * @param {float} x position on x axis
     * @param {float} y position on y axis
     * @param {int} a the label of our input
     */
    constructor(x, y, a){
        this.inputs = [];
        this.inputs[0] = x;
        this.inputs[1] = y;
        this.inputs[2] = 1;//the bias
        this.answer = a;
    }
}