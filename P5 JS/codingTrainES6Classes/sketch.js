let bubbles = [];
let addBubbles = [];

function setup() {
	let rand = random(18, 35);
	createCanvas(windowWidth, windowHeight);
	for(let i = 0; i <= rand; i++){
		bubbles[i] = new Bubble(random(30, windowWidth-30), random(30, windowHeight-20), random(20, 55), random(255), random(255), random(255), random(0, 225));
	}
}

function mousePressed() {
	let rand = random(8, 15);
	let b = new Bubble(mouseX, mouseY, rand, random(255),random(255),random(255),random(100, 255));
	addBubbles.push(b);

}

function draw() {
	background(9, 6, 15);
//bubbleOne
	for(let i = 0; i < bubbles.length; i++){
		bubbles[i].show();
		bubbles[i].move();
		bubbles[i].edge();
	}

//addBubble
	for (let j = 0; j < addBubbles.length; j++){
		addBubbles[j].show();
		addBubbles[j].move();
		addBubbles[j].edge();
	}
}


class Bubble {
	constructor (tempX, tempY, rayonX, r, g, b, a) {
		this.x = tempX;
		this.y = tempY;
		this.q =	rayonX;
		fill(this.r = r, this.g = g, this.b = b, this.a = a);
	}

	move() {
		this.x += random(-5, 9);
		this.y += random(-7, 5);
	}

	show() {
		stroke(0);
		strokeWeight(0);
		ellipse(this.x, this.y, this.q);
	}

	edge () {
		if((this.x > windowWidth-30) || (this.x < 0)){
			this.x = random(-10, 3);
		}
		if((this.y > windowHeight-50) || (this.y < 16)){
			this.y = random(-10, 25);
		}
	}

}
