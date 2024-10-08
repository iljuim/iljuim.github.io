fetch('https://raw.githubusercontent.com/iljuim/iljuim.github.io/refs/heads/main/digikurssi.json')

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
        document.getElementById("vastaus").innerHTML = 
        "<p>Tietoa ei pystytä hakemaan</p>";
        console.log(error);
    
    })

    function kerro(data) {

        var teksti = "";
        
        teksti = "<h1>" + data.otsikko + "</h1>";
        teksti += "<p>" + data.kuvaus + "</p>";
        teksti += "<p><img src=" + data.kuva + " alt='kuva'></p>";
        teksti += "<h3>Opintojakso: " + data.opintojakso.nimi + 
        " " + data.opintojakso.tunnus +
        " " + data.opintojakso.opintopisteet + " op" + "</h3>";

        teksti += "<ul>";

        for(var i = 0; i < data.opintojakso.sisalto.length; i++) {
            teksti += "<li>" + data.opintojakso.sisalto[i] + "</li>";
        }

        teksti += "</ul>";



        for(var i = 0; i < data.tekniikat.length; i++) {
            teksti += "<li>" + data.tekniikat[i].aihe + " " +
                "<a href=data.tekniikat[i].linkki>" + 
                data.tekniikat[i].linkki + "</a></li>";
            console.log(teksti);        
        }



        document.getElementById("vastaus").innerHTML = teksti;
    }




  



    
// tähän tulee muiden tietojen käsittelykohta
//
      //  // teksti-muuttujan sisällön tulostus