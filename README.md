<h1 align="left">Projeto Music Weather</h1>

###

<p align="left">Como este projeto funciona?<br><br>Dada uma localização (latitude, e longitude) a aplicação busca na API OpenWeatherMap a temperatura relativa da localização e assim que retornada a resposta é solicitada para à API do Shazam a lista de músicas recomendadas para o clima atual.<br>    • Caso a temperatura seja maior que 32 graus, é retornada uma lista de DANCE; <br>    • Caso a temperatura seja menor que 32 e maior 24, é retornada uma lista de POP; <br>    • Caso a temperatura seja menor que 24 e maior que 16, é retornada uma lista de ALTERNATIVE; <br>    • E caso a temperatura seja menor que 16, é retornada uma lista de ROCK. <br><br><br>O que preciso para testar?<br><br>É necessário inserir uma Key das respectivas API's no arquivo json que está na raiz do projeto.</p>

###

<p align="left">Links para as API'S:</p>
<a href="https://openweathermap.org/">OpenWeather</a>
<a href="https://rapidapi.com/tipsters/api/shazam-core/">Shazam</a>