var camera = document.querySelector('#camera');
var camera_pos = camera.getAttribute('position');

// console.log(camera_pos.z);
// document.querySelector('#portal').emit('url_jump');

var brick_deleted = false;

window.onload = function(){
  var check_campos = setInterval( function() {
    if(!brick_deleted){
      if(camera_pos.z <= 1){
        console.log("z <= 1 now");
        var brick_scene = document.querySelector('#BrickScene');
        brick_scene.setAttribute('visible', 'false');
        brick_deleted = true;
      }

      document.querySelector('#welcome').emit('second');
    }
  }, 100);
};

var fade_out_welcome = setInterval( function() {
  var w_txt = document.querySelector('#welcome');
  console.log(w_txt.opacity);
  if(w_txt.opacity == 1.0)
    w_txt.emit('out');
},100);
