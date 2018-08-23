var camera = document.querySelector('#camera');
var camera_pos = camera.getAttribute('position');

// console.log(camera_pos.z);

if(camera_pos.z >= 27) {
  document.querySelector('#portal').navigate('space.html');
}
