let bubbles = new Array;
let v = 0;
function setup() {
	fill(255, 0, 0);
	createCanvas(windowWidth, windowHeight);

	let rand = random(15, 26);
	for(let i = 0; i < 30; i++) {
		let oneBubble = new Bubble(random(30, windowWidth-20), random(30, windowHeight-20), 40, random(255), random(255), random(255));
		bubbles.push(oneBubble);
	}
}

function draw() {
	background(30);

	for(let i = 0; i < bubbles.length; i++) {
		bubbles[i].showBubble();
		bubbles[i].vibration();
		bubbles[i].edge();
	}
}


function mousePressed() {
	for(let i = 0; i < bubbles.length; i++) {
		bubbles[i].tochMeBaby(mouseX, mouseY);
	}
}

class Bubble {
	constructor(bubbleX, bubbleY, bubbleSize, r, g, b) {
		this.x = bubbleX;
		this.y = bubbleY;
		this.bubbleSize = bubbleSize;
		this.r = r; this.g = g; this.b = b;
	}

	tochMeBaby(X, Y) {
		let other = false;
		let distance = dist(X, Y, this.x, this.y);

		if(distance < this.bubbleSize) {
			this.r = 255; this.g = 255; this.b = 255;
			v++;
		}
		else if(v <= 0 || v > 31){
			this.r = random(255); this.g = random(255); this.b = random(255);
			v = 0;
		}
	}

	showBubble() {
		fill(this.r, this.g, this.b);
		stroke(random(255), random(255), random(255));
		strokeWeight(2);
		ellipse(this.x, this.y, this.bubbleSize);
	}

	vibration() {
		this.x += random(-2, 2);
		this.y += random(-2, 2);
	}

	edge() {
		if(this.x > width || this.x < 0) {
			this.x = random(-3 ,0);
		}

		if(this.y > height || this.y < 0) {
			this.y = random(-3 ,0);
		}
	}
}
