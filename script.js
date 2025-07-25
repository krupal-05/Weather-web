const apid ="2db3336a6f00087bd6000a5f828e3a5e";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

// search box 
searchbtn.addEventListener("click", () => {
    const city = searchbox.value;  
    if (city.length == 0) {
        alert("Please enter a city name");
    }
    else {
        chackweather(city);
    }
});


 
let icon = document.querySelector(".icon");


async function chackweather(city) {
    
    const responce = await fetch(apiurl + city +`&appid=${apid}`);
    var data = await responce.json();
    console.log(data)

document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=data.main.temp+" °C";
document.querySelector(".humi").innerHTML= data.main.humidity+" %";
document.querySelector(".speed").innerHTML= data.wind.speed+" km/h";
document.querySelector(".adata").style.display="flex";

if(data.weather[0].main == "Clouds"){
        icon.src="/Weather-web//img/clouds.png"
}
else if(data.weather[0].main=="clear"){
        icon.src="/img/clear.png"
}
else if(data.weather[0].main=="drizzle"){
        icon.src="/img/drizzle.png"
}
else if(data.weather[0].main=="mist"){
        icon.src="/img/mist.png"
}
else if(data.weather[0].main=="rain"){
        icon.src="/img/rain.png"
}
else if(data.weather[0].main=="snow"){
        icon.src="/img/snow.png"
}


}
