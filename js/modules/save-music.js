export default function initSaveMusic() {
    const saveBtn = document.querySelectorAll('#add');
    const songs = document.querySelectorAll('.song');

    saveBtn.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            const { src } = songs[index].querySelector('img');
            const linkHref = songs[index].querySelector('a').href;
            const link = songs[index].querySelector('a');
            const name = link.children[0].innerText;
            const artist = link.children[1].innerText;
            const songToSave = {
                src,
                linkHref,
                name,
                artist,
            }

            const playlist = JSON.parse(localStorage.getItem('playlist')) || [];

            playlist.push(songToSave);
            localStorage.setItem('playlist', JSON.stringify(playlist));
        })
    })
}