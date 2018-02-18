class Perceptron {
    /**
     * Perceptron constructor gets the number of inputs
     * @param {int} num number of inputs of the perceptron
     */
    constructor(num, lr) {
        this.numW = num;
        this.lr = lr;//learning rate
        this.weights = new Array(3);
        for (let i = 0; i < this.numW; i++)this.weights[i] = -1 + (Math.random() * 2);
    }
    /**
     * does the dot product between the inputs and the weights
     * @param {Array} inputs Array of values
     * @returns 1 or -1
     */
    feedForward(inputs) {
        //error handling
        // if(inputs.length > this.numW){
        //     console.log('INVALID INPUTS! This Perceptron takes only '+this.numW+' inputs');
        //     return undefined;
        // }else{
        let sum = 0;
        for (let i = 0; i < this.numW; i++) {
            sum += inputs[i] * this.weights[i];
        }
        return this.activate(sum);
        // }
    }
    /**
     * activation function returns 0 or 1
     * @param {float} num 
     * @returns 1 or -1
     */
    activate(num) {
        if (num > 0) return 1;
        else return -1;
    }
    /**
     * this function trains the perceptron
     * aka it tunes the weights to always obtain the wanted answer
     * @param {Array} inputs Arrray of values
     * @param {int} desired the desired output 
     */
    train(inputs, desired) {
        let guess = this.feedForward(inputs);
        // let guess = 1;
        let error = desired - guess;
        for (let i = 0; i < this.numW; i++)this.weights[i] += this.lr * error * inputs[i];
        // this.printWeights();
    }
    printWeights() {
        console.table(this.weights);
    }
    getWeights(){
        return this.weights;
    }
}