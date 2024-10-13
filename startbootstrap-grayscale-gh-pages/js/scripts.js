/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


fetch('https://rata.digitraffic.fi/api/v1/live-trains/station/HKI?departing_trains=100&include_nonstopping=false')


    .then(function (response) { // Muunnetaan vastaus JSON muotoon
        return response.json()
    })


    .then(function (responseJson) { // Käsitellään muunnettu (eli JSON muotoinen) vastaus
        lahtevat(responseJson);
        console.log(responseJson);
    })


    .catch(function (error) { // Jos tuli jokin virhe
        document.getElementById("lahtevatJunat").innerHTML =
            "<p>Tietoa ei pystytä hakemaan</p>";
        console.log(error);

    })

function lahtevat(data) {

    var lahtevat = "";
    var pvm = "";
    var aika = pvm.substring(0,10) + " kello: " + pvm.substring(11,5);
    

    for (i = 0; i < data.length; i++) {
        lahtevat += "<p> Juna " + data[i].trainType + " " + data[i].trainNumber + " lähtee " + data[i].timeTableRows[0].scheduledTime;

        //for (j = 0; j < data[i].timeTableRows.length; j++) {
        //        lahtevat += "<p> Juna " + data[i].trainType + " " + data[i].trainNumber + " lähtee " + aika;
        //        pvm += data[i].timeTableRows[0].scheduledTime;
        
      //  for (j = 0; j < data[i].timeTableRows.length; j++) {
      //      if (data[i].timeTableRows[j].stationShortCode=="TPE");
      //          if (data[i].timeTableRows[j].type=="DEPARTURE");
      //              if (data[i].trainCategory =="Long-distance");
      //                  if (data[i].timeTableRows[0].stationShortCode);
      //                      vika = data[i].timeTableRows.length - 1;
      //                      maaranpaa = data[i].timeTableRows[vika].stationShortCode;
      //                      aika = data[i].timeTableRows[j].scheduledTime;
      //  }
    
    }
    document.getElementById("lahtevatJunat").innerHTML = lahtevat;
}
