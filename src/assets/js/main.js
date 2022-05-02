import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import '../img/whitelogo.svg';
import '../img/intro.jpg';
import '../img/attractions/vortex.jpg';

import '../scss/main.scss';
import '../../index.html';

import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather?lat=54.9628731&lon=,73.3476211}&appid=7c97d5ca7588a4961f644bb93c24ce45',
    params: {q: 'Omsk'},

};

const App = () => {
    const getWeather = async(toSet) => {
        let weather = axios.request(options)
            .then(response=>(response.data.main.temp-273.15).toFixed(1)+'°C')
            .catch(err=>console.log(err));
        toSet.innerHTML = `<div class="loader"></div>`
        toSet.innerHTML = await weather;
    }

    const hamburgerMenu = document.querySelector('#menu');
    const headerNav = document.querySelector('.nav');
    const weatherContainer = document.querySelector('#weather');


    getWeather(weatherContainer);
    if(window.innerWidth < 926){

        const revealNav = (event) => {
            event.preventDefault();
            headerNav.classList.toggle('nav__reveal');
        }
        hamburgerMenu.style.display = "flex";
        hamburgerMenu.addEventListener('click', (e)=>revealNav(e));
    }
}

document.addEventListener('DOMContentLoaded', App)
