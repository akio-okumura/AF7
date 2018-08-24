var camera = document.querySelector('#camera');
var camera_pos = camera.getAttribute('position');

// console.log(camera_pos.z);
// document.querySelector('#portal').emit('url_jump');

window.onload = function(){
  var check_campos = setInterval( function() {
    if(camera_pos.z >= 15){
      var sceneEl = document.querySelector('a-scene');
      var entityEl = document.createElement('a-entity');
      entityEl.setAttribute('geometry', {
        primitive: 'box',
        height: 3,
        width: 1
      });
      entityEl.setAttribute('position', {x: 0, y: 2, z: -3});
      // Do `.setAttribute()`s to initialize the entity.
      sceneEl.appendChild(entityEl);
      console.log("z >= 15 now");
    }
  }, 100);
};
