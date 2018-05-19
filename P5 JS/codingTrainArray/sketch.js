let my = ["Hello", "MyName", "Is", "Belhassen", "Gharsallah", "codeMy[i]", "creator"];
let index = 0, x = 20;
let circle = [100, 200, 20, 400, 60, 80];

function setup() {
	createCanvas(windowWidth, windowHeight);

}
function draw() {

	background(12, 0, 50);

	// circle
		for(let i = 0; i < circle.length; i++){
			stroke(255);
			strokeWeight(1);
			noFill();
			ellipse(windowWidth/2, windowHeight/2, circle[i]);
		}
//Text
	fill(255, 0, 0);
	textStyle("Arial");
	textSize(60);
	textFont("BatmanForeverOutline")
	textStyle("bold");
	text(my[index], x, windowHeight/2+20);
	arc(windowWidth/2, windowHeight/2, 200)
}

function mousePressed() {
	index++;
	x+=windowWidth/2-250;
	if(x>windowWidth-270){
		x = 10;
	}
	if(index > my.length-1){
		index = 0;
	}
}
