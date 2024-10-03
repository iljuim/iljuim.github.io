fetch('https://raw.githubusercontent.com/iljuim/iljuim.github.io/refs/heads/main/jsonteht2Data.json')

    // Muunnetaan vastaus JSON muotoon
    
    .then(function(response) {
        return response.json()
    })
    
    // Käsitellään muunnettu (eli JSON muotoinen) vastaus
    
    .then(function (responseJson) {
        kerro(responseJson);
        
        //document.getElementById("vastaus").innerHTML =
        //"<p>Jatketaan harjoitusta</p>";
        console.log(responseJson);
    
        // Testataan onnistuuko json-luku
        // jos onnistuu päivitetään tähän json-datan käsittelevän funktion kutsu    
    })
    
    // Jos tuli jokin virhe
    
    .catch(function (error) { 
        document.getElementById("kurssi").innerHTML = 
        "<p>Tietoa ei pystytä hakemaan</p>";
        console.log(error);
    
    })

    function kerro(data) {
        var tiedot = "";

        tiedot = "<h1>" + data.kurssin_nimi + "</h1>";
        tiedot += "<p>" + data.kurssikoodi + "</p>";
        tiedot += "<p><img src=" + data.kuva + " alt='kuva'></p>";
        tiedot += "<p>Kurssin opiskelijat</p>";
        
        tiedot += "<ul>";

        for (var i = 0; i < data.opiskelijat.length; i++) {
            tiedot += "<li>" + data.opiskelijat[i].etunimi + " " + 
            data.opiskelijat[i].sukunimi + "</li>";
        }

        tiedot += "</ul>";

        document.getElementById("kurssi").innerHTML = tiedot;
    }
    