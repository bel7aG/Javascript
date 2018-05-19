function setup() {
	createCanvas(windowWidth, windowHeight);
}
var k = 1, v = -22;

var x = 52;
var speedIn = -52;
var speedOut = 5;
function draw() {
	var color = map(speedIn, 0, windowWidth, 0, 255);

	background(color);
//orange circle
	stroke(255, 80, 2);
	strokeWeight(4);
	noFill();
	ellipse(x+=3, windowHeight/3, 100, 100);
	if(x > windowWidth+2)
		ellipse(x=-52, windowHeight/3, 100, 100);


//muliticolorForEllipse
	var rgb = {
		r : random(0, 255),
		g : random(0, 255),
		b : random(0, 255)
	};
//widthEllipse
	stroke(0);
	strokeWeight(k);
	fill(rgb.r, rgb.g, rgb.b);
	ellipse(speedIn, windowHeight/2, 100, 100);

//heightCircle
	stroke(0);
	strokeWeight(k);
	fill(rgb.r, rgb.g, rgb.b);
	ellipse(windowWidth/2, speedIn, 60, 60);
	if(speedIn > windowHeight-32){
		speedOut *= -1;
/*		k+=12;
		if(k>160)
			k+=v;
		if(k<12)
			k+=12;
*/	}
	speedIn = speedIn + speedOut;
	if(speedIn < 52){
		speedOut = 5;
	}
	speedIn+=speedOut;

	//rectangleChangeColor
	noFill();
	if( ((mouseX > windowWidth-220) && (mouseX < windowWidth-20)) && ((mouseY > windowHeight/2) && (mouseY < windowHeight/2+200)) ){
		fill(255, 0, 0);
	}

	rect(windowWidth-220, windowHeight/2, 200, 200);
}
