var camera = document.querySelector('#camera');
var camera_pos = camera.getAttribute('position');

// console.log(camera_pos.z);
// document.querySelector('#portal').emit('url_jump');

var brick_deleted = false;

window.onload = function(){
  var check_campos = setInterval( function() {
    if(!brick_deleted){
      // レンガ部屋が削除された時
      if(camera_pos.z <= 1){
        console.log("BrickScene invisibled.");
        var brick_scene = document.querySelector('#BrickScene');
        brick_scene.setAttribute('visible', 'false');
        brick_deleted = true;

        // フェードインインターバル
        var inin = setInterval( function() {
          opIn();

          if(opacity >= 1.0) {
            clearInterval(inin);

            var outin = setInterval( function() {
              opOut();
              if(opacity <= 0.0) {
                clearInterval(outin);
                console.log("opacity <= 0.0.")
              }
            }, 10);
          }
        }, 10);
      }

      // document.querySelector('#welcome').emit('second');
    }
  }, 100);
};


var opacity = 0.0;
var duration = 0.01;
var w_txt = document.querySelector('#welcome');

function opIn() {
  opacity += duration;
  w_txt.setAttribute('opacity', opacity);
}

function opOut() {
  opacity -= duration;
  w_txt.setAttribute('opacity', opacity);
}
