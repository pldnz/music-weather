export default function initConsumeShazam(genre) {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '',
			'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
		}
	};

	const x = document.querySelector(".song-list");
	const y = document.getElementById("genre");
	y.innerHTML = genre;

	fetch(`https://shazam-core.p.rapidapi.com/v1/charts/genre-world?genre_code=${genre}`, options)
		.then(response => response.json())
		.then(body => {    
			console.log(body);
			for(let song of body ) {
				const songHtml = `<li><div class="song"><figure class="song-img"><img src="${song.images.background}" alt=""></figure><div class="song-desc"><a href="${song.url}"><span>${song.title}</span><span>${song.subtitle}</span></a><button id="add">Salvar</button></div></div></li>`;
				x.innerHTML += songHtml;
			}
		})
	.catch(err => console.error(err));
}



    //ROCK POP DANCE ELECTRONIC ALTERNATIVE