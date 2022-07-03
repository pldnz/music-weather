<h1 align="left">Projeto Music Weather</h1>

###

<p align="left">Como este projeto funciona?<br><br>Dada uma localização (latitude, e longitude), a aplicação busca na API OpenWeather a temperatura relativa da localização e assim que retornada a resposta, é efetuada uma nova requisição, desta vez para a API do Shazam, onde retorna uma lista de músicas recomendadas para o clima atual.<br>    • Caso a temperatura seja maior que 32° C, é retornada uma lista de DANCE; <br>    • Caso a temperatura seja menor que 32° C e maior que 24° C, é retornada uma lista de POP; <br>    • Caso a temperatura seja menor que 24° C e maior que 16° C, é retornada uma lista de ALTERNATIVE; <br>    • E caso a temperatura seja menor que 16° C, é retornada uma lista de ROCK. <br><br><br>O que preciso para testar?<br><br>É necessário inserir (e possuir) as respectivas Keys das API's nos arquivos JS consume-weather e consume-shazam.</p>

###

<p align="left">Links para as API'S:</p>
<a href="https://openweathermap.org/">OpenWeather</a>
<a href="https://rapidapi.com/tipsters/api/shazam-core/">Shazam</a>