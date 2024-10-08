/*!
* Start Bootstrap - One Page Wonder v6.0.6 (https://startbootstrap.com/theme/one-page-wonder)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-one-page-wonder/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

fetch('http://www.omdbapi.com/?i=tt3896198&apikey=d359a86e')

    
.then(function(response) { // Muunnetaan vastaus JSON muotoon
    return response.json()
})


.then(function (responseJson) { // Käsitellään muunnettu (eli JSON muotoinen) vastaus
    elokuvanPaikka(responseJson);
    console.log(responseJson);
})


.catch(function (error) { // Jos tuli jokin virhe
    document.getElementById("elokuvanSijainti").innerHTML = 
    "<p>Tietoa ei pystytä hakemaan</p>";
    console.log(error);

})

function elokuvanPaikka(data) {

    var sijainti = "";

    sijainti = data.Ratings[0];



  //  ilmateksti = "<p>" + data.name + "</p>";
  //  ilmateksti += "<p>Kuvaus: " + data.weather[0].description + "</p>";
  //  ilmateksti += "<p>Lämpötila: " + data.main.temp + "&degC</p>";
  //  ilmateksti += "<p>Tuulen nopeus " + data.wind.speed + " m/s</p>";
  //  ilmateksti += "<p><img src ='" + kuva + "' atl='kuva'></p";
   
   document.getElementById("elokuvanSijainti").innerHTML = sijainti;
}

fetch('https://api.openweathermap.org/data/2.5/weather?q=chicago&appid=aefb0a1e38e7d7cb6e88ab3d175c7252')

    
.then(function(response) { // Muunnetaan vastaus JSON muotoon
    return response.json()
})


.then(function (responseJson) { // Käsitellään muunnettu (eli JSON muotoinen) vastaus
    saa(responseJson);
    console.log(responseJson);
})


.catch(function (error) { // Jos tuli jokin virhe
    document.getElementById("saa").innerHTML = 
    "<p>Tietoa ei pystytä hakemaan</p>";
    console.log(error);

})

function saa(data) {

    var ilmateksti = "";
   // var kuva = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';

    ilmateksti = "<p>" + data.name + "</p>";
    ilmateksti += "<p>Kuvaus: " + data.weather[0].description + "</p>";
    ilmateksti += "<p>Tuulen nopeus " + data.wind.speed + " m/s</p>";
   // ilmateksti += "<p><img src ='" + kuva + "' atl='kuva'></p";
   
   document.getElementById("saa").innerHTML = ilmateksti;
}