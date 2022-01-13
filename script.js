const apikey = "7d9f8a80a3be6a2e39765ee769cda8b0";
let weather = {
  fetchWeather: async (city) => {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`
      );
      let resData = await response.json();
      displayWeather(resData);
    } catch (err) {
      console.log("ERROR: " + err);
    }
  },
  search : ()=>{
    weather.fetchWeather((document.querySelector(".search-bar").value));
  }
};
function displayWeather(resData) {
  const { name } = resData;
  const { description, icon } = resData.weather[0];
  const { temp } = resData.main;
  const { humidity } = resData.main;
  const { speed } = resData.wind;
  // console.log(name, icon, description, temp, humidity, speed);
  document.querySelector(".city").innerHTML = name;
  document.querySelector(".description").innerHTML = description;
  document.querySelector(".icon").src = `http://openweathermap.org/img/wn/${icon}.png`;
  document.querySelector(".temperature").innerHTML = `${temp}°C`;
  document.querySelector(".wind").innerHTML = `Wind speed: ${speed} m/s`;
  document.querySelector(".humidity").innerHTML = `Humidity: ${humidity}%`;
  document.querySelector(".weather").classList.remove("before-search");
  document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+name+"')"
}
document.querySelector(".search button").addEventListener('click',()=>{
    weather.search();
})
document.querySelector(".search-bar").addEventListener('keyup',()=>{
    if(event.key == "Enter"){
        weather.search();
    }
})

