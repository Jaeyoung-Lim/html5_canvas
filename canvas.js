var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
innderWidth = window.innerWidth;
innerHeight = window.innerHeight;


var c = canvas.getContext('2d');
// c.fillStyle='rgba(255, 0, 0, 0.1)';
// c.fillRect(100, 100, 100, 100);

console.log(canvas);

//Line
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.strokeStyle = "#fa34a3"
// c.stroke();
window.addEventListener('mousemove',
	function(event)){
	console.log('yefdsa');
}

function Circle(x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

	this.draw = function() {
		c.beginPath()
		c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		c.strokeStyle = 'blue';
		c.stroke();
	}

	this.update = function() {
		if(this.x + this.radius > innerWidth || this.x - this.radius < 0) {
			this.dx = -this.dx;
		}
		if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
			this.dy = -this.dy;
		}

		this.x += this.dx;
		this.y += this.dy;
		this.draw();
	}
}

var circle = new Circle(200, 200, 3, 3, 30);


function animate() {
	requestAnimationFrame(animate);
	c.clearRect(0, 0, innerWidth, innerHeight);
	circle.draw();
	circle.update();
}

animate();