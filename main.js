$(document).ready(function () {
    
    axios({ method: "get",
        url: "https://api.unsplash.com/photos/random/?client_id=139eb85e05a943c0dbf6c1f3ef98cb7bb921bc9ded35edd6e9f9389baa3dffcc" })
    
    .then((info) => {
        $('body').css('background-image', 'url(' + info.data.urls.full + ')')
        console.log(info); })

    .catch({})

    axios({ method: "get",
        url: `http://api.openweathermap.org/data/2.5/forecast?id=jeddah&units=metric&APPID=ea23ae955b191f30341782504a77c42c`})
    
    .then((info) => {
        $(".weather").append(` 
        <p class='weather_info' >${info.data.weather[0].main} ${info.data.main.temp}<br>${info.data.name}</p>`);
        console.log(info); })

    .catch({ })

    axios({ method: "get",
        
        url: 'https://cors-anywhere.herokuapp.com/api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en',})

    .then((info) => {
        $(".time").append(moment().format('LTS'))
        $("footer").append(`<quote>${info.data.quoteText} <br> -${info.data.quoteAuthor} </quote>`);
        console.log(info);})
    
    .catch({ }) })