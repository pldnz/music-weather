import initSaveMusic from "./save-music.js"
import initDismountPlaylist from "./dismount-playlist.js";
import initShowPlaylist from "./show-playlist.js";

export default function initDeleteMusic() {
    const deleteBtn = document.querySelectorAll('#delete');
    const savedSongs = document.querySelector('.saved-songs');
    const songs = savedSongs.querySelectorAll('.song');

    deleteBtn.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const playlist = JSON.parse(localStorage.getItem('playlist'));
            playlist.splice(index, 1);
            localStorage.setItem('playlist', JSON.stringify(playlist));
            initDismountPlaylist();
            initShowPlaylist();
            initDeleteMusic();
        })
    })
}