const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '',
		'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
	}
};

const x = document.getElementById("demo");

fetch('https://shazam-core.p.rapidapi.com/v1/charts/genre-world?genre_code=ELECTRONIC', options)
	.then(response => response.json())
	.then(body => {    
        console.log(body);
        for(let song of body ) {
            x.innerHTML += `<p>song: ${song.title} artist: ${song.subtitle}<p><img src="${song.images.background}">`
        }
    }
    )
	.catch(err => console.error(err));


    //ROCK POP DANCE ELECTRONIC ALTERNATIVE