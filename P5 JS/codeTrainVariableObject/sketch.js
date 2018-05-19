//variable
var circleX = 0;

//Object
var circle1 = {
	x : 100,
	toul : 200,
	oredh : 200
};

function setup() {
	createCanvas(windowWidth, windowHeight);
	var r = map(mouseX, 0, windowWidth, 12, 115);
	var g = map(mouseX, 0, windowWidth, 2, 100);
	var b = map(mouseX, 0, windowWidth, 25, 255);
	//OR
	var rgb = {
		r : map(mouseX, 0, windowWidth, 12, 115),
		g : map(mouseX, 0, windowWidth, 2, 100),
		b : map(mouseX, 0, windowWidth, 25, 255)
	};
	background(rgb.r, rgb.g, rgb.b);
}
function draw() {
//map(value, startOne, stopOne, startTwo, stopTwo);


//Variable - Object
/*	fill(255, 100, 0);
	ellipse(circleX+=3, windowHeight/2, 200, 200);

	fill(20, 100, 39);
	ellipse(circle1.x++, (windowHeight/2)+200, circle1.toul, circle1.oredh);*/

//	rndm = random(min, max);
var 	rgb = {
	r : random(0,255),
	g : random(0,255),
	b : random(0, 255),
	opacity : random(0, 150)
}
	fill(rgb.r, rgb.g, rgb.b, rgb.opacity);
	ellipse(random(0, windowWidth), random(0, windowHeight), 50, 50);

}
