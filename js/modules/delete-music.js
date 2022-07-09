import initDismountPlaylist from "./dismount-playlist.js";
import initShowPlaylist from "./show-playlist.js";

export default function initDeleteMusic() {
    const deleteBtn = document.querySelectorAll('#delete');

    deleteBtn.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const playlist = JSON.parse(localStorage.getItem('playlist'));
            playlist.splice(index, 1);
            localStorage.setItem('playlist', JSON.stringify(playlist));
            initDismountPlaylist();
            initShowPlaylist();
            initDeleteMusic();
        })
    })
}