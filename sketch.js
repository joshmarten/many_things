var shapes = [];
var timer;

function setup() {
	createCanvas(windowWidth, windowHeight);
	timer = second();
	background(255);
}

function draw() {
	noStroke();
	createTime();
	clearScreen();
	
	if (mouseIsPressed === true){
	for (var i = 0; i<shapes.length;i++){
		push();
		translate(mouseX,mouseY);
		shapes[i].display();
		pop();
	}
	disappear();
	}
	
}

function createTime() {
	if (timer = second()) {
		timer++;
		shapes.push(new Shape(random(-1*width/10,width/10),random(-1*height/10,height/10),random(0,width/5),random(0,height/5),color(random(255),random(255),random(255)), random(0,width)))
	} else {
		timer = second();
	}
	if (timer > 59) {
		timer = 0;
	}
}

function Shape(x, y, l, w, c, radius) {
	this.x = x;
	this.y = y;
	this.l = l;
	this.w = w;
	this.c = c;
	this.radius = radius;
	
	this.display = function () {
		fill(this.c);
		rect(this.x,this.y,this.l,this.w,this.radius);
	}
	
}

function disappear(){
	if (shapes.length > 50){
		shapes.splice(0);
	}
}

function clearScreen(){
	if (key === 'c'){
		clear();
	}
}