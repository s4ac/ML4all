let cnv;
let p;
let trainer = [], epochs = 2000;//this defines how many times are we training the perceptron
let count = 0;
let playing = false, showPerceptron = false;

let a = 0;
let w = 600, h = 400;
function init() {
	p = new Perceptron(3, 0.0001);
	for (let i = 0; i < epochs; i++) {
		let x = Math.random() * w - (w / 2);
		let y = Math.random() * h - (h / 2);
		let answer = 1
		if (y < f(x)) answer = -1;
		trainer.push(new Trainer(x, y, answer));
	}
}
init();
let mono;
function preload() {
	mono = loadFont('simplePerceptron/font/Courier New.ttf');
}
function setup() {
	pixelDensity(1);
	cnv = createCanvas(w, h);
	cnv.parent('perceptronCanvas');
	// resizeCanvas(w, h);
	// p = new Perceptron(3);
	console.log(p);
	textFont(mono);
	// console.table(trainer[0]);
}
function draw() {
	translate(width / 2, height / 2);
	background(220);
	if (playing) {
		a = trainer[count].answer;
		p.train(trainer[count].inputs, a);
		count = (count + 1) % epochs;
	}
	let guess = 0, i1 = 0, i2 = 0;
	for (let i = 0; i < count; i++) {
		stroke(0);
		guess = p.feedForward(trainer[i].inputs);
		// console.log(guess);
		if (guess > 0) fill(0);
		else noFill();
		strokeWeight(1);
		i1 = trainer[i].inputs[0];
		i2 = trainer[i].inputs[1];
		ellipse(i1, i2, 8);
	}


	//draw the lines
	strokeWeight(3);
	stroke(255, 0, 0);
	line(-w / 2, f(-w / 2), w / 2, f(w / 2));
	stroke(0, 255, 0);
	let weigths = p.getWeights();
	let x1 = -w / 2;
	let y1 = (-weigths[2] - weigths[0] * x1) / weigths[1];
	let x2 = w / 2;
	let y2 = (-weigths[2] - weigths[0] * x2) / weigths[1];
	line(x1, y1, x2, y2);

	let w1 = weigths[0];
	let w2 = weigths[1];
	if (showPerceptron) {
		let offset = 20;
		background(0, 150);
		stroke(255)
		fill(0);
		let xx = 200, yy = 150, s1 = 60, s2 = 90;
		line(-xx, -yy, -xx / 2, -yy);
		line(-xx, yy, -xx / 2, yy);
		line(-xx / 2, -yy, 0, 0);
		line(-xx / 2, yy, 0, 0);
		line(0, 0, xx, 0);
		ellipse(-xx, -yy, s1);//i1
		ellipse(-xx / 2, -yy, s1);//w1
		ellipse(-xx, yy, s1);//i2
		ellipse(-xx / 2, yy, s1);//w2
		ellipse(0, 0, s2);//guess
		ellipse(xx, 0, s2);//a
		// textAlign(CENTER);
		textSize(20);
		fill(255);
		text(i1, -xx, -yy + offset);
		text(i2, -xx, yy + offset);
		text(w1, -xx / 2, -yy - offset);
		text(w2, -xx / 2, yy - offset);
		text(guess, 0, 0);
		text(a, xx, 0);
	}

}
/**
 * function to calculate y based on x;
 * @param {float} x 
 */
function f(x) {
	return 0.2 * x + 0.4;
}
function play() {
	playing = !playing;
}
function displayPerceptron() {
	showPerceptron = !showPerceptron;
}
function setCode(file, id) {
	jQuery.get(file, (data) => {
		CodeMirror(document.getElementById(id), {
			value: data,
			mode: "javascript"
		});
	}, 'text');

}