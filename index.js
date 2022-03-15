const apikey = "3265874a2c77ae4a04bb96236a642d2f";
const url = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

async function getWeatherByLocation(city){
    const resp = await fetch(url(city), { origin: "cors" });;
    const respData = await resp.json();

    addWeatherToPage(respData)
}

// function

function FtoC(K){
    return (K -273.15).toFixed(2);
}


function addWeatherToPage(data){
    const temp = FtoC(data.main.temp);
    main.innerHTML = ''
    const weather = document.createElement('div');
    weather.classList.add('weather');

    weather.innerHTML = `
    <small>There are</small>
    <h2>${temp}°C</h2>
    <p>in ${search.value}</p>
    `
    main.appendChild(weather);
}


form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const location = search.value;

    if(location){
        getWeatherByLocation(location);
    }
})

