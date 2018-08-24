var camera = document.querySelector('#camera');
var camera_pos = camera.getAttribute('position');

// console.log(camera_pos.z);
// document.querySelector('#portal').emit('url_jump');

window.onload = function(){
  var check_campos = setInterval( function() {
    if(camera_pos.z <= 15){
      console.log("z <= 15 now");
      var brick_scene = document.querySelector('#BrickScene');
      brick_scene.setAttribute('visible', 'false');
    }
  }, 100);
};
