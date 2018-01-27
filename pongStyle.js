$(document).ready(function(){

var leftPaddle=document.getElementById('leftPaddle');
var rightPaddle=document.getElementById('rightPaddle');
var Field=document.getElementsByClassName('Field');

var leftPaddleTop = 76;
var rightPaddleTop = 76;

.style.top = (e.pageY - 50) + 'px';

var change = 0;
var pressed = false;
$(document).keydown(function(e) {
    if(!pressed){
        width = $(this).width();
        height = $(this).height();
        start = true;
        switch (e.which) {
            // case 37:
            //     $('#leftPaddle').stop().animate({
            //         left: '-=' + width
            //     }, 2000); //left arrow key
            //     break;
            case 38:
                $('#leftPaddle').stop().animate({
                    top: '-=' + height
            }, 2000);
                console.log(leftPaddleTop);
                //up arrow key
                break;
            // case 39:
            //     $('#leftPaddle').stop().animate({
            //         left: '+=' + width
            //     }, 2000); //right arrow key
            //     break;
            case 40:
                $('#leftPaddle').stop().animate({
                    top: '+=' + height
                }, 2000);
                console.log(leftPaddleTop);

                //bottom arrow key
                break;
        }
    }
    pressed = true;
}).keyup(function(){
    $('#leftPaddle').stop();
    pressed = false;
});



function getPosition() {
    x = $("#leftPaddle").position();
    leftPaddleTop = (x.top);
}

var posTop = 195;
var posLeft = 295;
var ball = document.getElementById("ball");

//var p1score = 0;
//var p2score = 0;

function aI() {
    var speed = 1;
    if (rightPaddleTop === 0) {
        rightPaddleTop ++;
        rightPaddle.style.top = rightPaddleTop + 'px';
        return;
    }
    else if (rightPaddleTop === 300) {
        rightPaddleTop --;
        rightPaddle.style.top = rightPaddleTop  + 'px';
        return;
    }
    else if ((posTop - 40) > rightPaddleTop) {
        rightPaddleTop = rightPaddleTop + speed;
        rightPaddle.style.top = rightPaddleTop + 'px';
    } else {
        rightPaddleTop = rightPaddleTop - speed;
        rightPaddle.style.top = rightPaddleTop + 'px';
    }
}


function inBounds() {
     if (leftPaddleTop <=0) {
             $('#leftPaddle').stop();
             leftPaddle.style.top = (leftPaddleTop + .1) + 'px';
      } else if (leftPaddleTop >= 300) {
             $('#leftPaddle').stop();
             leftPaddle.style.top = (leftPaddleTop - .1) + 'px';
      } else {

     }
}


var angle = 1
function startMove() {
  if (posTop == 195 && posLeft == 295) {
  console.log('start');
  var ball = document.getElementById("ball");
  var id = setInterval(frame, 1);
  var move = 'right';
  var upDown = 'down'
  var strikeAngle = 0
  var speed = 1
  function frame() {
      // console.log('frame');
          getPosition();
      inBounds();

      //console.log(leftPaddleTop);
      function moveRight() {
          // Detects colision with right Paddle and starts moveLeft Functions
          if (posLeft == 580 && rightPaddleTop <= posTop && (rightPaddleTop + 100) >= posTop) {
              move = 'left';
              strikeAngle = Math.abs((rightPaddleTop + 50) - (posTop + 5));
              if (strikeAngle <= 10) {
                  angle = 0;
              } else if (strikeAngle >= 11 && strikeAngle <= 20) {
                  angle = 0.5;
              } else if (strikeAngle >= 21 && strikeAngle <= 30) {
                  angle = 1.0;
              } else if (strikeAngle >= 31 && strikeAngle <= 40) {
                  angle = 1.5;
              } else {
                  angle = 2.0;
              }
              moveLeft();
              // Detects if ball has collided with far right line
          } else if (posLeft >= 590) {
              posLeft += speed;
              ball.style.left = posLeft + 'px';
              var player = 1
              score(player);
              reset();
              clearInterval(id);
              // Detects if ball has collided with top line and switched movement to down
          } else if (posTop <= 0) {
              posTop += angle;
              posLeft += speed;
              upDown = 'down';
              ball.style.left = posLeft + 'px';
              ball.style.top = posTop + 'px';
              //Detects if ball has collided with bottom line and switched movement to up
          } else if (posTop >= 390) {
              posTop -= angle;
              posLeft += speed;
              upDown = 'up';
              ball.style.left = posLeft + 'px';
              ball.style.top = posTop + 'px';
              //clearInterval(id);
              //If ball has not collided with an object its movements is determined by the upDown var
          } else {
              if (upDown == 'up') {
                  posTop -= angle;
                  posLeft += speed;
                  ball.style.left = posLeft + "px";
                  ball.style.top = posTop + 'px';
                  aI();
              } else {
                  posTop += angle;
                  posLeft += speed;
                  ball.style.left = posLeft + "px";
                  ball.style.top = posTop + "px";
                  aI();
              }

          }
      }

      function moveLeft() {
          // Detects colision with left Paddle and starts moveRight Functions
          if (posLeft == 10 && leftPaddleTop <= posTop && (leftPaddleTop + 100) >= posTop) {
              move = 'right';
              strikeAngle = Math.abs((leftPaddleTop + 50) - (posTop + 5));
              if (strikeAngle <= 10) {
                  angle = 0;
              } else if (strikeAngle >= 11 && strikeAngle <= 20) {
                  angle = 0.5;
              } else if (strikeAngle >= 21 && strikeAngle <= 30) {
                  angle = 1.0;
              } else if (strikeAngle >= 31 && strikeAngle <= 40) {
                  angle = 1.5;
              } else {
                  angle = 2.0;
              }
              moveRight();
              // Detects if ball has collided with far left line
          } else if (posLeft <= 0) {
              posLeft -= speed;
              ball.style.left = posLeft + 'px';
              var player = 2
              score(player);
              reset();
              clearInterval(id);
              // Detects if ball has collided with top line and switched movement to down
          } else if (posTop <= 0) {
              posTop += angle;
              posLeft -= speed;
              upDown = 'down';
              ball.style.left = posLeft + 'px';
              ball.style.top = posTop + 'px';


              //clearInterval(id);
              //Detects if ball has collided with bottom line and switched movement to up
          } else if (posTop >= 390) {
              posTop -= angle;
              posLeft -= speed;
              upDown = 'up';
              ball.style.left = posLeft + 'px';
              ball.style.top = posTop + 'px';

              //clearInterval(id);
              //If ball has not collided with an object its movements is determined by the upDown var
          } else {
              if (upDown == 'up') {
                  posTop -= angle;
                  posLeft -= speed;
                  ball.style.left = posLeft + "px";
                  ball.style.top = posTop + 'px';
                  aI();

                  //clearInterval(id);

              } else {
                  posTop += angle;
                  posLeft -= speed;
                  ball.style.left = posLeft + "px";
                  ball.style.top = posTop + "px";
                  aI();

                  //clearInterval(id);

              }

          }

      }

      //console.log(rightPaddleTop);
      if (move == 'right') {
          moveRight();
      } else {
          moveLeft();
      }

    }
  } else {
      return;
  }
}


var p1score = 0;
var p2score = 0;

document.body.onkeydown = function(e){
    if(e.keyCode == 32){
        startMove();
        event.preventDefault()
    }
}

function reset() {
    posTop = 195;
    posLeft = 295;
    angle = 1;
    ball.style.top = posTop + 'px';
    ball.style.left = posLeft + "px";
    console.log('reset');

}


function score(player) {


    if (player == 2) {
        p2score ++
    } else {
        p1score++
    }

    document.getElementById("player1score").innerHTML = p1score;
    document.getElementById("player2score").innerHTML = p2score;
    if (p2score >= 7) {
        alert('Player 2 Wins!')
        p2score = 0;
        p1score = 0;
    } else if (p1score >= 7) {
        alert('Player 1 Wins!')
        p2score = 0;
        p1score = 0;
    }
    reset()

}


document.getElementById("player1score").innerHTML = p1score;
document.getElementById("player2score").innerHTML = p2score;


// listen any touch event
document.addEventListener('touchstart', handleTouchEvent, true);
document.addEventListener('touchmove', handleTouchEvent, true);
document.addEventListener('touchend', handleTouchEvent, true);
document.addEventListener('touchcancel', handleTouchEvent, true);

// will adjust leftpaddl's y to latest touch
function handleTouchEvent(e) {
    if (e.touches.length === 0 ) return;
    e.preventDefault();
    e.stopPropagation();
    var touch = e.touches[0];
    startMove();
    if (e.pageY < 49) {
        return;
    } else if (e.pageY > 350) {
        return;
    }
    else {
        leftPaddle.style.top = (e.pageY - 50) + 'px';
    }
}



});