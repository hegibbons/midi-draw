$( document ).ready(function() {
  var requestAnimationFrame = window.requestAnimationFrame || 
                              window.mozRequestAnimationFrame || 
                              window.webkitRequestAnimationFrame || 
                              window.msRequestAnimationFrame;
  var mod = 0;
  var increase = 2;

  function drawMidi() {
      mod += 0.01

      console.log(mod, increase)
      var canvas = document.getElementById('acanvas');
      var context = canvas.getContext('2d');
      var center = 250;
      var bigRadius = center * .8;
    
      var smallRadius = bigRadius / 8;
      var thirdPos = center * (2/3);
      var pi = Math.PI;
      context.lineWidth = 3;
      context.strokeStyle = '#292929';

      context.beginPath();
      context.arc(center, center, bigRadius, (6.75 * pi) / 12, (5.2 * pi) / 12  * mod);
      context.stroke();
      context.closePath();

      //top dot
      context.beginPath();
      context.arc(center, center * .53, smallRadius, 0, 2 * pi * mod);
      context.stroke();
  
      //mid dots
      //left
      context.beginPath();
      context.arc(thirdPos, thirdPos, smallRadius, 0, 2 * pi * mod);
      context.stroke();
      
      //right
      context.beginPath();
      context.arc(center * 4/3, thirdPos, smallRadius, 0, 2 * pi * mod);
      context.stroke();
      
      //low dots
      //left
      context.beginPath();
      context.arc(center * .53, center, smallRadius, 0, 2 * pi * mod);
      context.stroke();
      //right
      context.beginPath();
      context.arc(center * 1.465, center, smallRadius, 0, 2 * pi * mod);
      context.stroke();
      
      //bottom semicircle
      context.beginPath();
      context.arc(center, center * 1.79, bigRadius / 5, pi,  pi + (pi*mod));
      context.stroke();
      
      if (mod < 1) {
      requestAnimationFrame(drawMidi);
      }
  }

  drawMidi();
  
});
