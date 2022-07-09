import initConsumeWeather from "./modules/consume-weather.js";
import initConsumeShazam from "./modules/consume-shazam.js";
import initShowPlaylist from "./modules/show-playlist.js";
import initSaveMusic from "./modules/save-music.js"
import initDismountPlaylist from "./modules/dismount-playlist.js";
import initDeleteMusic from "./modules/delete-music.js";

initConsumeWeather();
initSaveMusic();
initShowPlaylist();
initDeleteMusic();
initConsumeShazam();

const tab = document.querySelector('[data-btn-tab]');

tab.addEventListener('click', () => {
    initDismountPlaylist();
    initShowPlaylist();
    initDeleteMusic();
});
