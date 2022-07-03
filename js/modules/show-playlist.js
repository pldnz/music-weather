export default function initShowPlaylist() {
    var playlist = JSON.parse(localStorage.getItem('playlist'));
    const x = document.querySelector('.saved-songs');
    
    playlist.forEach(element => {
        const songHtml = `<li><div class="song"><figure class="song-img"><img src="${element.src}" alt=""></figure><div class="song-desc"><a href="${element.link}"><span>${element.name}</span><span>${element.artist}</span></a><button id="delete">Apagar</button></div></div></li>`;
        x.innerHTML += songHtml;
    });
}