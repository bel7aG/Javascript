function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(7, 0, 30);

	noFill();
	stroke(random(255), random(255), random(255));
	drawCircle(windowWidth/2, windowHeight/2-120, 400);

}

//recursive function
function drawCircle(x, y, diameter) {
	ellipse(x, y, diameter);
	if(diameter > 2) {
		let newDiameter = diameter * 0.5;
		drawCircle(x + newDiameter, y, newDiameter);
		drawCircle(x - newDiameter, y, newDiameter);
		drawCircle(x, (y + newDiameter), newDiameter);
	}
}
