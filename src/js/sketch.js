// const p5sketch = (p5) => {
//   let growth = 30
//   let colorgradient = 0;
//   let t = 0;
//   let colorbase
  
  
//   p5.setup = function(){
    
//     let windowWidth = window.innerWidth;
// 		let windowHeight = window.innerHeight;
//     var canvas = p5.createCanvas(windowWidth, windowHeight);
//     canvas.parent('p5container');
//     p5.noStroke();
 
//   }
  
//   p5.draw = function(){
//     console.log("p5ready")
//     p5.clear();
    
//     for(let x = 0; x <= p5.width; x = x + growth) {
//       let xAngle = p5.map(p5.mouseX, 0, p5.width, -4 * p5.PI, 4 * p5.PI, true);
//       let yAngle = p5.map(p5.mouseY, 0, p5.height, -4 * p5.PI, 4 * p5.PI, true);  
//       for (let y = 0; y <= p5.height; y = y + 30) {
//         let angle = xAngle * (x / p5.width) + yAngle * (y / p5.height);
//         let myX = x + 20 * p5.cos(2 * p5.PI * t + angle);
//         let myY = y + 20 * p5.sin(2 * p5.PI * t + angle);
    
//           p5.fill(122,0, 255, colorbase - colorgradient);

//           colorbase = p5.width/2;
    
//           colorgradient=p5.dist(x, y, p5.width/2, p5.height/2)
        

//         p5.ellipse(myX, myY, 10, 10); // draw particle
//       }
//     }
//     t = t + 0.01; // update time
//   }
// }
// module.exports = p5sketch;





const p5sketch = (p5) => {

  let t=0;
  p5.setup = function(){
    
    let windowWidth = window.innerWidth;
		let windowHeight = window.innerHeight;
    var canvas = p5.createCanvas(windowWidth, windowHeight);
    canvas.parent('p5container');

    p5.stroke(0, 0, 0, 15);
 
  }
  
  p5.draw = function(){
    // p5.stroke(0, 0, 0, 15);
    if(t<50){
    p5.translate(p5.width/2 - 200, p5.height/2 - 200)
    p5.randomChord();
    p5.randomChord();
    }
    console.log(t)

    t++;
  }


p5.randomChord =function() {

    // find a random point on a circle
    var angle1 = p5.random(0, 2 );
    var xpos1 = p5.random(200) + p5.random(200);
    var ypos1 = p5.random(200)  + p5.random(200);
  
    // find another random point on the circle
    var angle2 = p5.random(0, 2 * p5.PI);
    var xpos2 = p5.random(200) + p5.random(200);
    var ypos2 = p5.random(200) + p5.random(200) ;
  
    // draw a line between them
    p5.line(xpos1, ypos1, xpos2, ypos2);
    p5.stroke(255,51,51, 50);
    p5.fill(204,0,0, 50);
    p5.ellipse(xpos1,ypos1, 5,5);
    p5.ellipse(xpos2,ypos2, 5,5);
  }

}
module.exports = p5sketch;

 



// const p5sketch = (p5) => {
//   let growth = 30
//   let colorgradient = 0;
//   let t = 0;
//   let colorbase
  
  
//   p5.setup = function(){
    
//     let windowWidth = window.innerWidth;
// 		let windowHeight = window.innerHeight;
//     var canvas = p5.createCanvas(windowWidth, windowHeight);
//     canvas.parent('p5container');
//     p5.noStroke();
 
//   }
  
//   p5.draw = function(){
//     console.log("p5ready")
//     p5.clear();
    
//     for(let x = 0; x <= p5.width; x = x + growth) {
//       let xAngle = p5.map(p5.mouseX, 0, p5.width, -4 * p5.PI, 4 * p5.PI, true);
//       let yAngle = p5.map(p5.mouseY, 0, p5.height, -4 * p5.PI, 4 * p5.PI, true);  
//       for (let y = 0; y <= p5.height; y = y + 30) {
//         let angle = xAngle * (x / p5.width) + yAngle * (y / p5.height);
//         let myX = x + 20 * p5.cos(2 * p5.PI * t + angle);
//         let myY = y + 20 * p5.sin(2 * p5.PI * t + angle);
    
//           p5.fill(122,0, 255, colorbase - colorgradient);

//           colorbase = p5.width/2;
    
//           colorgradient=p5.dist(x, y, p5.width/2, p5.height/2)
        

//         p5.ellipse(myX, myY, 10, 10); // draw particle
//       }
//     }
//     t = t + 0.01; // update time
//   }
// }
// module.exports = p5sketch;



// THIS ONE LOOKS GOOD

// const p5sketch = (p5) => {

//   let t=0;
//   p5.setup = function(){
    
//     let windowWidth = window.innerWidth;
// 		let windowHeight = window.innerHeight;
//     var canvas = p5.createCanvas(windowWidth, windowHeight);
//     canvas.parent('p5container');

//     p5.stroke(0, 0, 0, 15);
 
//   }
  
//   p5.draw = function(){
//     if(t<50){
//     p5.translate(p5.width/2 - 200, p5.height/2 - 200)
//     p5.randomChord();
//     p5.randomChord();
//     }
//     console.log(t)

//     t++;
//   }


// p5.randomChord =function() {

//     // find a random point on a circle
//     var angle1 = p5.random(0, 2 * p5.PI);
//     var xpos1 = 200 + 200 * p5.cos(angle1);
//     var ypos1 = 200  + 200 * p5.sin(angle1);
  
//     // find another random point on the circle
//     var angle2 = p5.random(0, 2 * p5.PI);
//     var xpos2 = 200 + 200 * p5.cos(angle2);
//     var ypos2 = 200 + 200 * p5.sin(angle2);
  
//     // draw a line between them
//     p5.line(xpos1, ypos1, xpos2, ypos2);
//     p5.ellipse(xpos1,ypos1, 20,20);
//     p5.ellipse(xpos2,ypos2, 20,20);
//   }

// }
// module.exports = p5sketch;

 

