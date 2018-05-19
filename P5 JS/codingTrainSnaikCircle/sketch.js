let Bar = [];
let v = false;
let r, b, g;
function setup() {
	createCanvas(windowWidth, windowHeight);

		Bar= new Rect(0, -height/2, 20, height/2);

}


function draw() {
	background(7, 0, 23);
	Bar.show(random(255), random(255), random(255), r, b, g);
	Bar.move();
	Bar.edge();
	if(v == true) {
		Bar.show(r = random(255), b = random(255),g = random(255));
	}

}

class Rect {
	constructor(pX, pY, widthRect, heightRect, rgb) {
		this.x = pX;
		this.y = pY;
		this.widthRect = widthRect;
		this.heightRect = heightRect;
		this.rgb = rgb;
	}

	show(sr, sg, sb, r, g, b) {
		stroke(this.sr = sr, this.sg = sg, this.sb = sb);
		strokeWeight(2);
		fill(this.rgb = r, this.rgb = g, this.rgb = b, 75);
		rect(this.x, this.y, this.widthRect, this.heightRect, 160);
	}

	move() {
		this.y += 50;
	}

	edge() {
		v = false;
		if(this.y >= (height*1.5)) {
			this.y = -(height/2) +5 ;
			v = true;
		}
	}
}
