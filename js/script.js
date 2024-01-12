let weather = {
	apikey: "8b876e5f299f5eeab619e75f904d034f",
	fetchWeather: function (city)  {
		fetch(
			"https://api.openweathermap.org/data/2.5/weather?q="
		+city
		+ "&units=metric&appid="
		+ this.apikey)
		.then ((response) => response.json())
		.then((data) => this.displayWeather(data));
	},
	displayWeather : function(data){
      const {name} = data;
	  const {icon, description} = data.weather[0];
	  const {temp, humidity} = data.main;
	  const {speed} = data.wind;
	  console.log(name,icon,description,temp,humidity,speed);
	  document.querySelector(".city").innerText = "Weather in" + name;
      document.querySelector(".icon-img").src = 'data:image/svg+xml,' + encodeURIComponent(icon);
	  document.querySelector(".icon-img").style.marginTop = '20px';
	  document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
	  document.querySelector(".humidity").innerText = "humidity: " +humidity+ "%";
	  document.querySelector(".wind").innerText = "wind speed: " +speed+ "km/hr";
	  document.querySelector(".weather").classList.remove("loading");
	  document.body.style.backgroundImage = 'https://source.unsplash.com/1600x900/?"+ name +"'
	},
	search: function (){
		this.fetchWeather(document.querySelector(".search-bar").value);
	}
};
function searchWeather() {
    const cityInput = document.querySelector(".search-bar");
    const city = cityInput.value.trim();
    if (city !== "") {
        weather.fetchWeather(city);
    } else {
        alert("Please enter a city name");
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Call the fetchWeather function or any other initialization here
    
});
document.querySelector(".search button").addEventListener("click",function (){
    weather.search();
})
document.querySelector(".search-bar").addEventListener("keyup", function(event){
if(event.key == 'Enter'){
	weather.search();
}
})
weather