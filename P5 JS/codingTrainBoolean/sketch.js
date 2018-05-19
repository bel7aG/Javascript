var check = true;

function checkPosition(){
	return (( mouseX > windowWidth/2-50 )&&(mouseX < windowWidth/2+50)) && ((mouseY > windowHeight/2-50) && (mouseY < windowHeight/2+50));
}

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	if(check){
		background(6, 1, 24);
	}else {
		background(22);
	}
	var rgba = {
		r : random(0, 255),
		g : random(0, 255),
		b : random(0, 255),
		a : random(80, 195)
	};
	fill(rgba.r, rgba.g, rgba.b, rgba.a);

	if(checkPosition()) {
		fill(255, 0 , 0);
	}
	rectMode(CENTER);
	rect(windowWidth/2, windowHeight/2, 100, 100);

}
function mousePressed() {
	if(checkPosition()) {
		/*if(check){
			check = false;
		}else{
			check = true;
		}*/
		check = !check;
		rectMode(CENTER);
		rect(windowWidth/2, windowHeight/2, 100, 100);
	}
}
