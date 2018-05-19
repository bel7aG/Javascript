function setup() {
	createCanvas(windowWidth, windowHeight);

}

var redColor = 122;
var greenColor = 255;
var blueColor = 11;


function draw() {
	background(7,0,22);
	ellipseMode(CENTER);
	stroke(0);
	//	Bdan
		fill(redColor++, greenColor, blueColor++);
		rect( (windowWidth/2)-50, (windowHeight/2)-80, 100, 160, 23, 23, 0, 0);
	// Ras
	fill(0, 230, 22);
	ellipse( (windowWidth/2), (windowHeight/2)-130, 65, 100);

	//left3in

	fill(255, 255, 255);

	ellipse( (windowWidth/2)-12, (windowHeight/2)-130, 18.5, 35);
	fill(0);
	ellipse( (windowWidth/2)-12+(mouseX/450), (windowHeight/2)-130+(mouseY/290), 5, 12);

	//right3in
	fill(255, 255, 255);
	ellipse( (windowWidth/2)+12, (windowHeight/2)-130, 18.5, 35);

	fill(0);
	ellipse( (windowWidth/2)+12+(mouseX/450), (windowHeight/2)-130+(mouseY/290), 8, 19);

	//	leftHand
	stroke(255, 255, 255);
	line( (windowWidth/2)-50, (windowHeight/2)-55, (windowWidth/2)-70, (windowHeight/2)+30);
	// leftCheckHand
	fill(255, 255, 255);
	ellipse( (windowWidth/2)-70, (windowHeight/2)+30, 15, 30);

	//	rightHand
	stroke(255, 255, 255);
	line( (windowWidth/2)+50, (windowHeight/2)-55, (windowWidth/2)+70, (windowHeight/2)+30);
	// rightCheckHand
	fill(255, 255, 255);
	ellipse( (windowWidth/2)+70, (windowHeight/2)+30, 15, 30);



	//douraLouta
	stroke(0);
	fill(255, 25);
	ellipse(mouseX, mouseY, (windowWidth/2), (windowHeight/2)+162, 140, 20);


	//leftLegs
	stroke(0, 255, 0);
	line((windowWidth/2)-40, (windowHeight/2)+80, (windowWidth/2)-50, (windowHeight/2)+150);
	//leftLegsSégin
	stroke(0);
	fill(255, 255, 255);
	ellipse( (windowWidth/2)-50, (windowHeight/2)+150, 18, 25);

	//RightLegs
	stroke(0, 255, 0);
	line((windowWidth/2)+40, (windowHeight/2)+80, (windowWidth/2)+50, (windowHeight/2)+150);
	//rightLegsSégin
	stroke(0);
	fill(255);

	ellipse( (windowWidth/2)+50, (windowHeight/2)+150, 18, 25);



}
