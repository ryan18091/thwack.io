$(document).ready(function(){

// var collisionDisplay = document.getElementById('collisionDisplay');

// hero ship
// var ship = document.getElementById('ship');
// ship.onload = launchWhenReady ;

// //  bad ship
// var shipBad = document.getElementById('shipBad');
// shipBad.onload = launchWhenReady ;

// image loader
// imagesCount = 2 ;

// function launchWhenReady() {
//   // imagesCount --;
//   if (imagesCount) return;
//   setInterval(animate, 20);
// }

// var shipBadY = 0;

// listen any touch event
document.addEventListener('touchstart', handleTouchEvent, true);
document.addEventListener('touchmove', handleTouchEvent, true);
document.addEventListener('touchend', handleTouchEvent, true);
document.addEventListener('touchcancel', handleTouchEvent, true);

// will adjust ship's x to latest touch
function handleTouchEvent(e) {
    if (e.touches.length === 0 ) return;
    e.preventDefault();
    e.stopPropagation();
    var touch = e.touches[0];
    ship.style.left = (touch.pageY - ship.width / 2) + 'px';
}



// // animation loop
// function animate() {
//     // move ship
//     // shipBadY += 1;
//     // shipBad.style.top = Math.ceil(shipBadY) + 'px';
//     // test collision
//     var isColliding = testCollide(shipBad);
//     collisionDisplay.style.display = isColliding ? 'block' : 'none';
// }

// collision test
// function testCollide(enemi) {
//     var shipPosX = parseInt(ship.style.left);
//     var shipPosY = parseInt(ship.style.top);
//     var shipWidth = ship.width;
//     var shipHeight = ship.height;
//     var badX = parseInt(enemi.style.left);
//     var badY = parseInt(enemi.style.top);
//     var badWidth = enemi.width;
//     var badHeight = enemi.height;
//     return bBoxIntersect(shipPosX, shipPosY, shipWidth, shipHeight,
//     badX, badY, badWidth, badHeight);
// }

// function bBoxIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
//     return !(x1 + w1 < x2 || x1 > x2 + w2 || y1 + h1 < y2 || y1 > y2 + w2);
// }

// -----------------------------------------------------
// Handle mouse event for easy testing on Browser

document.addEventListener('mousemove', handleMouseEvent);

var leftPaddle=document.getElementById('leftPaddle');

function getPosition() {
    x = $("#leftPaddle").position();
    leftPaddleTop = (x.top);
}

function handleMouseEvent(e) {
    getPosition();
    // console.log(leftPaddleTop);
    console.log(e.pageY);
    // leftPaddle.style.top = (e.pageY - 50) + 'px';



    if (e.pageY < 49) {
        return;
    } else if (e.pageY > 350) {
        return;
    }
    else {
        leftPaddle.style.top = (e.pageY - 50) + 'px';
    }


    // else if (leftPaddleTop <= 0) {
    //     leftPaddle.style.top = 1 + 'px';
    // }
    // else {
    //     return;
    // }

}

});