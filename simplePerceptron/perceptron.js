class Perceptron {
    /**
     * Perceptron constructor gets the number of inputs
     * @param {int} num number of inputs of the perceptron
     */
    constructor(num) {
        this.numW = num;
        this.weights = [];
        for (let i = 0; i < this.numW; i++)this.weights.push(random(-1, 1));
    }
    /**
     * does the dot product between the inputs and the weights
     * @param {Array} inputs Array of values
     * @returns 1 or -1
     */
    feedForward(inputs) {
        //error handling
        if(inputs.length > this.numW){
            console.log('INVALID INPUTS! This Perceptron takes only '+this.numW+' inputs');
            return undefined;
        }else{
            let sum;
            for (let i = 0; i < this.numW; i++){
                sum += inputs[i] * this.weights[i];
            }
            return this.activate(sum);
        }
    }
    /**
     * activation function returns 0 or 1
     * @param {float} num 
     * @returns 1 or -1
     */
    activate(num) {
        return num >= 0 ? 1 : -1;
    }
    printWeights() {
        console.table(this.weights);
    }
}