
export default function initSaveMusic() {
    const saveBtn = document.querySelectorAll('#add');
    const songs = document.querySelectorAll('.song');

    saveBtn.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const src = songs[index].querySelector('img').src;
            const linkHref = songs[index].querySelector('a').href;
            const link = songs[index].querySelector('a');
            const name = link.children[0].innerText;
            const artist = link.children[1].innerText;
            const song_to_save = {
                src: src,
                link: linkHref,
                name: name,
                artist: artist,
            }

            let playlist = JSON.parse(localStorage.getItem('playlist')) || [];

            playlist.push(song_to_save);
            localStorage.setItem('playlist', JSON.stringify(playlist));
        })

    })
}