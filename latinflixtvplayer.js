

 
$(document).ready(function(){

$('.vjs-loading-spinner').html('<img src="https://dl.dropbox.com/s/ps7mi7u5s55baye/Bean%20Eater-1.3s-100px.svg" alt="Loading...">');

});


(function (window, videojs) {

        var latinflixtvplayer_Player = (window.emiliosalasPlayer = videojs(

          "latinflixtv_player1"

        ));
  
  var touchOverlay = (window.touchOverlay = emiliosalasPlayer.touchOverlay({

          

          seekLeft: {},
    play: {},
          seekRight: {},
          
          lockButton: {},
        }));

      })(window, window.videojs);


(function(window, videojs,) {

      var player = window.player = videojs('latinflixtv_player1');

  player.hlsQualitySelector({

         displayCurrentQuality:false,
         sortAscending: true,
autoPlacement: 'top',
          getCurrentQuality: 'high',         
      });
    }(window, window.videojs));


//WaterMark Plugin
(function(window, videojs) {

      var player = window.player = videojs('latinflixtv_player1');

      player.watermark({

        image: 'https://dl.dropbox.com/s/nxca8qw9kzbwsq8/svg%20%281%29.svg' ,

        url: '',

        align: 'top-left',

      });

    }(window, window.videojs));


//MobileUI Plugin
var player = videojs('latinflixtv_player1');

  player.mobileUi();



videojs('latinflixtv_player1', {
    controls: true,
    plugins: {
        videoJsResolutionSwitcher: {
          default: 'high',
          dynamicLabel: true
        }
      }
  }, function(){

      player.on('resolutionchange', function(){
        console.info('Source changed to %s', player.src())
      })
      
  })


player.on('dblclick', function() { player.requestFullscreen(); });
