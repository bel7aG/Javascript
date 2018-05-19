function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	var rgb = {
		r : 255,
		g : 0,
		b : 1,

	};
	background(6, 0, 35);
	for(var x=30; x < mouseX; x+=50){
		fill(0, 255, 0, 255);
		ellipse(x, mouseY, 35, [40]);

		for(var y=30; y < windowHeight; y+=50){
			fill(rgb.r, rgb.g, rgb.b);
			ellipse(x, y, 40, 40);
		}
	}








}
