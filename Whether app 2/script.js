const container = document.querySelector('.Container')
const search = document.querySelector('.search-box button')
const  weatherBox= document.querySelector('.weather-box')
const weatherDetails = document.querySelector('.weather-details')

search.addEventListener('click', () =>{
    const APIkey ='48950fbb9c306c45e317d19a75c112b6';
    const city = document.querySelector('.search-box input').Value;

    if(city -- '')

        ruturn;
        
    fetch('https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid=${APIkey}').then
    (response => response.json()).then(json =>{

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperayure');
        const  description= document.querySelector('.weather-box .description');
        const  humidity= document.querySelector('.weather-box .humidity span');
        const  wind= document.querySelector('.weather-box wind span');

        switch(json.weather[0]){
            case 'clear':
                image.src ='image/clear.png';

            break;

            case 'snow':
                image.src ='image/snow.png';

            break;

            case 'rain':
                image.src ='image/rain.png';

            break;

            case 'clear':
                image.src ='image/cloud.png';

            break;

            



            default:
                image.src = '7865939.png';
        }

        temperature.innerHTML ='${pareseInt(json.main.temp)<span>℃</span>}';
        description.innerHTML ='${json.wether[0].description}';
        humidity.innerHTML ='${json.main.humidity}%';
        wind.innerHTML ='${pareseInt(json.wind.speed)}km/h';


    });
});
