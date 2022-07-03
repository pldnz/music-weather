// import initConsumeWeather from "./modules/consume-weather.js";
import initShowPlaylist from "./modules/show-playlist.js";
import initSaveMusic from "./modules/save-music.js"
import initDismountPlaylist from "./modules/dismount-playlist.js";

// initConsumeWeather();
initSaveMusic();
initShowPlaylist();

const tab = document.querySelector('[data-btn-tab]');
console.log(tab);
tab.addEventListener('click', function(e){
    initDismountPlaylist();
    initShowPlaylist();
});
