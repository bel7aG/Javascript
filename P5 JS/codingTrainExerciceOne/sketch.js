var ball = {
	x : 61,
	y : 61,
	xSpeed : 10,
	ySpeed : 8
};

function display(){
	ellipse(ball.x, ball.y, 120, 120);

}
function setupBallOnWidth(){
	if(ball.x > windowWidth-60 || ball.x <= 60){
		ball.xSpeed = ball.xSpeed * -1;
		fill(random(0, 255), random(0, 255), random(0, 255), random(20, 70));

	}
}

function setupBallOnHeight(){
	if(ball.y > windowHeight-60 || ball.y <= 60){
		ball.ySpeed = ball.ySpeed * -1;
		fill(random(255), random(255), random(255));
		stroke(random(0, 255), random(0, 255), random(0, 255), random(20, 70));
		strokeWeight(5);
	}
}

function moveBall() {
	ball.x+=ball.xSpeed;
	ball.y+=ball.ySpeed;
}

function clickSetup(){
	if(mouseIsPressed){
		ball.ySpeed = ball.ySpeed * -1;
		ball.xSpeed = ball.xSpeed * -1;
	}
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}


function draw() {
	background(7, 0, 30);
	display();
	setupBallOnWidth();
	setupBallOnHeight();
	moveBall();
	clickSetup()
}
