fetch('https://tie.digitraffic.fi/api/weathercam/v1/stations/C04507/history')


    .then(function (response) { // Muunnetaan vastaus JSON muotoon
        return response.json()
    })


    .then(function (responseJson) { // Käsitellään muunnettu (eli JSON muotoinen) vastaus
        kuvat(responseJson);
        console.log(responseJson);
    })


    .catch(function (error) { // Jos tuli jokin virhe
        document.getElementById("kuvat").innerHTML =
            "<p>Tietoa ei pystytä hakemaan</p>";
        console.log(error);

    })

function kuvat(data) {

    var kuva = 'https://weathercam.digitraffic.fi/' + data.presets.id + '.jpg';
    var kamera = "";

    kuvat = "<h3>Valokuvat sääkameroista</h3>"

    //for (i = 0; i < data.stations.length; i++) {
    //    kuvat += "<p>" + data.stations[i].id + "</p>"
    //    };
    for (i = 0; i < data.presets.length; i++) {
        kamera += "<p>" + data.presets[i].id + "</p>";
        kamera += "<p>" + data.presets[i].dataUpdatedTime + "</p>";
        kamera += "<p><img src ='" + data.presets[i].history[0].imageUrl + "' atl='kuva'></p>";

    }
    //kamera += "<p>" + data.presets[].id + "</p>";
   // kamera += "<p>" + data.presets[0].history[0].imageUrl + "</p>";
   // kamera += "<p>" + data.presets[0].history[0].sizeBytes + " Mb</p>";


    document.getElementById("kamera").innerHTML = kamera
}


fetch('https://rata.digitraffic.fi/api/v1/live-trains/station/HKI?departing_trains=100&include_nonstopping=false')


    .then(function (response) { // Muunnetaan vastaus JSON muotoon
        return response.json()
    })


    .then(function (responseJson) { // Käsitellään muunnettu (eli JSON muotoinen) vastaus
        junat(responseJson);
        console.log(responseJson);
    })


    .catch(function (error) { // Jos tuli jokin virhe
        document.getElementById("junat").innerHTML =
            "<p>Tietoa ei pystytä hakemaan</p>";
        console.log(error);

    })

function junat(data) {

    var aika = ""; 
    var maaranpaa = "";
    var vika = data[i].timeTableRows.length - 1

    for (i = 0; i < data.length; i++) {
        for (j = 0; j < data[i].timeTableRows.length; j++) {
            if (data[i].timeTableRows[j].stationShortCode=="TPE");
                if (data[i].timeTableRows[j].type=="DEPARTURE");
                    if (data[i].trainCategory =="Long-distance");
                        if (data[i].timeTableRows[0].stationShortCode);
                            vika = data[i].timeTableRows.length - 1;
                            maaranpaa = data[i].timeTableRows[vika].stationShortCode;
                            aika = data[i].timeTableRows[j].scheduledTime;
        }
    }

    document.getElementById("junat").innerHTML = aika, maaranpaa;
}

