var c = document.getElementById('mesh');
var $ = c.getContext('2d', {alpha: false});
var scaleX = document.innerWidth / c.width;
var scaleY = document.innerHeight * 1.5 / c.height;
var scaleToCover = Math.max(scaleX, scaleY);

var col = function(x, y, r, g, b) {
  $.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
  $.fillRect(x, y, 1,1);
}
var R = function(x, y, t) {
  return( Math.floor(54 + 114*Math.cos( (x*x-y*y)/300 + t )) );
}

var G = function(x, y, t) {
  return( Math.floor(54 + 64*Math.sin( (x*x*Math.cos(t/4)+y*y*Math.sin(t/3))/300 ) ) );
}

var B = function(x, y, t) {
  return( Math.floor(255 + 64*Math.sin( 5*Math.sin(t/3) + ((x-100)*(x-100)+(y-100)*(y-100))/1100) ));
}

var t = 0;

var run = function() {
  for(x=0;x<=35;x++) {
    for(y=0;y<=35;y++) {
      col(x, y, R(x,y,t), G(x,y,t), B(x,y,t));
    }
  }
  t = t + 0.003;
  window.requestAnimationFrame(run);
}

c.style.transformOrigin = '0 0';
c.style.transform = 'scale(' + scaleToCover + ')';

run();