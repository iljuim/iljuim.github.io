fetch('https://github.com/iljuim/iljuim.github.io/blob/7a34d050390641ef34da6cad009d224453e6eaf8/digikurssi.json')

    // Muunnetaan vastaus JSON muotoon
    
    .then(function(response) {
        return response.json()
    })
    
    // Käsitellään muunnettu (eli JSON muotoinen) vastaus
    
    .then(function (responseJson) {
        kerro(responseJson)
        
        //document.getElementById("vastaus").innerHTML =
        "<p>Jatketaan harjoitusta</p>";
        console.log(responseJson);
    
        // Testataan onnistuuko json-luku
        // jos onnistuu päivitetään tähän json-datan käsittelevän funktion kutsu    
    })
    
    // Jos tuli jokin virhe
    
    .catch(function (error) { 
        document.getElementById("vastaus").innerHTML = 
        "<p>Tietoa ei pystytä hakemaan</p>";
        console.log(error);
    
    })

    function kerro(data) {
        var tiedot = "";

        tiedot = "<h1>" + data.kurssin_nimi + "</h1>"
        tiedot += "<p>" + data.kurssikoodi + "</p>"

    }