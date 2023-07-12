import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

player.on('timeupdate', function (data) {
  throttle(
    localStorage.setItem('videoplayer-current-time', data.seconds),
    1000
  );
});
const getTimeVideo = localStorage.getItem('videoplayer-current-time');
if (getTimeVideo !== null) {
  player.setCurrentTime(getTimeVideo);
}
