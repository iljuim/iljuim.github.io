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