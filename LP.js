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
    }
  }, 100);
};
