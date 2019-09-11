var x;

var x2;

var rot;

//Starting colors
var r;

var g;

var b;

//color change speed
var r2;

var g2;

var b2;

//snake stuff


var s;
var scl = 20;
let song; 
//let song2;

var food;

function preload() {
    song = ('assets/keep.mp3')
}
  function setup()
    {
        
      x = 6;

      x2 = .08;

      rot = 0;

      //Starting colors
      r = random(0, 255);

      g = random(0, 255);

      b = random(0, 255);

      //color change speed
      r2 = random(2, 3);

      g2 = random(2, 3);

      b2 = random(2, 3);


    rectMode(CENTER);
    var canvas = createCanvas (windowWidth,windowHeight);
    canvas.parent = ('sketch-holder');
  //  background(255, 0, 0);

//snake stuff
        
            song = loadSound('assets/keep.mp3');
        //song2 = loadSound......
  s = new Snake();
  frameRate(10);
  pickLocation();
}

    function draw()
    {

        //change the x below to a fixed int and see what happens
        strokeWeight(20);
        stroke(0, 0, 0, 50);
        noFill();
        background(r, g, b, 125);

        for (i = -width; i < width; i += 100)
        {
            for (j = -width; j < width; j += 100)
            {
                translate(i + width/2, j);
                rotate(rot);
              // ellipse(30, 30, 20, 20);
              // ellipse(200, 200, 200, 200);
                rect(0, 0, 600, 600);
                resetMatrix();
            }
        }

        x += x2;
        rot += 0.001;
        r += r2;
        g += g2;
        b += b2;

        //stroke width flip
        if (x > 30 || x <3)
        {
            x2 *= -1;
        }

        //color flips
        if (r < 20 || r > 255) {
            r2 *= -1;
        }

        if (g < 20 || g > 255) {
            g2 *= -1;
        }

        if (b < 20 || b > 255) {
            b2 *= -1;
        }
        
        if (s.eat(food)) {
          
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
//      song2.play();
    background(255, 0, 0);
  } else {
//      song2.stop();
    song.play();
    background(0, 255, 0);
  }
    pickLocation();
  }
  s.death();
  s.update();
  s.show();


  fill(random(255),random(255), random(255));
  rect(food.x, food.y, scl, scl);
    }
// function mousePressed() {
//     // Pick new random color values
//     r = random(0, 255);
//     g = random(0, 255);
//     b = random(0, 255);
//   }


//snake stuff continued

function pickLocation() {
  var cols = floor(width/scl);
  var rows = floor(height/scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function mousePressed() {
  s.total++;

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}