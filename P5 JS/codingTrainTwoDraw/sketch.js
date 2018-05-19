function setup() {
	createCanvas(windowWidth, windowHeight);
	background(22, 0, 30, 255);
}

function draw() {
	stroke(0, 0);
	fill(255, 50, 0);
	ellipse(mouseX, mouseY, 50, 40);
}

function mouseDragged(){
	stroke(0, 0);
	fill(22, 0, 30, 255);
	ellipse(mouseX, mouseY,110, 110);

}
