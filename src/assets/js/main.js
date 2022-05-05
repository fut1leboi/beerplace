import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import '../img/whitelogo.svg';
import '../img/logo_gradient.svg';
import '../img/intro.jpg';
import '../img/intro1.jpg';
import '../img/intro2.jpg';
import '../img/attractions/vortex.jpg';
import '../img/attractions/panoramic_wheel.jpg';
import '../img/attractions/seashells.jpg';
import '../img/attractions/horses.jpg';
import '../img/shapes/smile.svg';
import '../img/shapes/circle.svg';
import '../img/shapes/triangle.svg';

import '../scss/main.scss';
import '../../index.html';
import '../../gallery.html';
import '../../contacts.html';

import axios from "axios";

const options = {
    method: 'GET',
    url: 'https://api.openweathermap.org/data/2.5/weather?lat=54.9628731&lon=,73.3476211}&appid=7c97d5ca7588a4961f644bb93c24ce45',
    params: {q: 'Omsk'},

};



const App = () => {

    const weatherText = document.getElementsByClassName('weather__text')[1];
    const hamburgerMenu = document.querySelector('#menu');
    const headerNav = document.querySelector('.nav');
    const weatherContainer = document.querySelector('#weather');
    const navClose = document.querySelector('#close-nav');
    const getWeather = async(toSet, text) => {
        let weather = axios.request(options)
            .then(response=>(response.data.main.temp-273.15).toFixed(1))
            .catch(err=>console.log(err));
        toSet.innerHTML = `<div class="loader"></div>`;
        if(await weather >= 18){
            text.innerHTML = 'Сейчас отличная погода для прогулки!';
        }
        else if(await weather < 18){
            text.innerHTML = 'Похоже, придется надеть куртку или ветровку, чтобы выйти на прогулку!';
        }
        else if(await weather < 5){
            text.innerHTML = 'Брр... Погода на улице не очень, может прогуляться в следующий раз?';
        }
        toSet.innerHTML = await weather+'°C';
    }


    getWeather(weatherContainer, weatherText);

    const revealNav = (event) => {
        event.preventDefault();
        headerNav.classList.toggle('nav__reveal');
        navClose.style.display = 'flex';
    }

    const collapseNav = (event) => {
        event.preventDefault();
        headerNav.classList.toggle('nav__reveal');
        navClose.style.display = 'none'
    }
    hamburgerMenu.addEventListener('click', (e)=>revealNav(e));
    navClose.addEventListener('click', (e)=>collapseNav(e));

}

document.addEventListener('DOMContentLoaded', App)
