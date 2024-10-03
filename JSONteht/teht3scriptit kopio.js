fetch('https://api.visittampere.com/api/v1/visittampere/event/published/all/?format=json&lang=fi')

    
    .then(function(response) { // Muunnetaan vastaus JSON muotoon
        return response.json()
    })
    
    
    .then(function (responseJson) { // Käsitellään muunnettu (eli JSON muotoinen) vastaus
        tapahtumat(responseJson);
        console.log(responseJson);
    })
    
    
    .catch(function (error) { // Jos tuli jokin virhe
        document.getElementById("teksti").innerHTML = 
        "<p>Tietoa ei pystytä hakemaan</p>";
        console.log(error);
    
    })

    function tapahtumat(data) {

        var teksti = "";

        teksti = "<h1>Tampereella tapahtuu</h1>";
        for (var i = 0; i < data.length; i++) {
                teksti = teksti + "<h3>" + data[i].title + "</h3>";
                teksti = teksti + "<p>" + data[i].description + "</p>";
                teksti = teksti + "<p> <a href=" + data[i].url + ">" + data[i].url + "</a></p>";

        }
       document.getElementById("teksti").innerHTML = teksti
    }


fetch('https://api.openweathermap.org/data/2.5/weather?lang=fi&q=helsinki&units=metric&appid=8eb0dee6e664aacb8e003384ee115dde')

    
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
        var kuva = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';

        ilmateksti = "<p>" + data.name + "</p>";
        ilmateksti += "<p>Kuvaus: " + data.weather[0].description + "</p>";
        ilmateksti += "<p>Lämpötila: " + data.main.temp + "&degC</p>";
        ilmateksti += "<p>Tuulen nopeus " + data.wind.speed + " m/s</p>";
        ilmateksti += "<p><img src ='" + kuva + "' atl='kuva'></p";

       document.getElementById("saa").innerHTML = ilmateksti
    }


    fetch('https://api.openweathermap.org/data/2.5/weather?lang=fi&q=tampere&units=metric&appid=8eb0dee6e664aacb8e003384ee115dde')

    
    .then(function(response) { // Muunnetaan vastaus JSON muotoon
        return response.json()
    })
    
    
    .then(function (responseJson) { // Käsitellään muunnettu (eli JSON muotoinen) vastaus
        saa2(responseJson);
        console.log(responseJson);
    })
    
    
    .catch(function (error) { // Jos tuli jokin virhe
        document.getElementById("saa2").innerHTML = 
        "<p>Tietoa ei pystytä hakemaan</p>";
        console.log(error);
    
    })

    function saa2(data) {

        var ilmateksti = "";
        var kuva = 'https://openweathermap.org/img/wn/' + data.weather[0].icon + '.png';

        ilmateksti = "<p>" + data.name + "</p>";
        ilmateksti += "<p>Kuvaus: " + data.weather[0].description + "</p>";
        ilmateksti += "<p>Lämpötila: " + data.main.temp + "&degC</p>";
        ilmateksti += "<p>Tuulen nopeus " + data.wind.speed + " m/s</p>";
        ilmateksti += "<p><img src ='" + kuva + "' atl='kuva'></p";
       
       document.getElementById("saa2").innerHTML = ilmateksti
    }