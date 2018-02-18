let cnv;
let p;
let trainer = [], epochs = 2000;//this defines how many times are we training the perceptron
let count = 0;
let playing = false, loaded = false;
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
// function preload() {
// 	txt1 = loadStrings('simplePerceptron/perceptron.txt');
// 	// loaded = true;
// 	// console.log(txt1.join("\n"));
// }
function setup() {
	pixelDensity(1);
	cnv = createCanvas(w, h);
	cnv.parent('perceptronCanvas');
	// resizeCanvas(w, h);
	// p = new Perceptron(3);
	console.log(p);

	// console.table(trainer[0]);
}
function draw() {
	background(220);
	translate(width / 2, height / 2);

	if (playing) {
		p.train(trainer[count].inputs, trainer[count].answer);
		count = (count + 1) % epochs;
	}

	for (let i = 0; i < count; i++) {
		stroke(0);
		let guess = p.feedForward(trainer[i].inputs);
		// console.log(guess);
		if (guess > 0) fill(0);
		else noFill();
		strokeWeight(1);
		ellipse(trainer[i].inputs[0], trainer[i].inputs[1], 8);
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

let txt1;
function setCode(file, id) {
	jQuery.get(file, function (data) {
		console.log(data);
		txt1 = data;
		CodeMirror(document.getElementById('code1'), {
			value: txt1,
			mode: "javascript"
		});
	}, 'text');

}