function detectmob() {

    if( navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
    ){

        console.log('mobile');

    }
    else {

        // If not mobile then do this
document.getElementById("myVideo").innerHTML = '<source src="Explosion.mp4" type="video/mp4">' +
    '<source src="Explosion.ogv" type="video/ogv">' + '<source src="Explosion.webm" type="video/webm">';
    console.log('Not Mobile')
    }
} // detectmob

detectmob();