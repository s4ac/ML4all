let cnv;
function setup() {
	cnv = createCanvas(100, 100);
	cnv.parent('perceptronCanvas');
	let divW = document.getElementById('perceptronCanvas').offsetWidth;
	resizeCanvas(divW * 0.85, divW * 0.65);
	background(100);
}

function draw() {

}