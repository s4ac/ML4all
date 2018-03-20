let cnv;
let p;
let trainer = [], epochs = 2000;//this defines how many times are we training the perceptron
let count = 0;
function setup() {
	cnv = createCanvas(100, 100);
	cnv.parent('perceptronCanvas');
	let divW = document.getElementById('perceptronCanvas').offsetWidth;
	resizeCanvas(divW * 0.85, divW * 0.65);
	p = new Perceptron(3);
	console.log(p);
	for (let i = 0; i < epochs; i++) {
		let x = random(-width / 2, width / 2);
		let y = random(-height / 2, height / 2);
		let answer = 1
		if (y < f(x)) answer = -1;
		trainer.push(new Trainer(x, y, answer));
	}
	console.table(trainer[0]);
	p.train(trainer[count].inputs, trainer[count].answer);
	// trainer = new Trainer()
}
p.train(trainer[count].inputs, trainer[count].answer);
	count = (count + 1) % epochs;

	for(let i = 0; i < count; i++){
		stroke(0);
		let guess = p.feedForward(trainer[i].inputs);
		guess > 0 ? fill(0) : noFill();
		ellipse(trainer[i].inputs[0], trainer[i].inputs[1], 8);
	}
function draw() {
	background(220);
	translate(width/2, height/2);
	// console.log(p);
	ellipse(0, 0, 100);
	
}
/**
 * function to calculate y based on x;
 * @param {float} x 
 */
function f(x) {
	return 2 * x + 1;
}