function displayTemperature(response){
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = temperature;
}

export function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = searchInputElement.value ;
let apikey = "b2a5adcct04b33178913oc335f405433";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&unit=metric`;
axios.get(apiUrl).then(displayTemperature);
}

export function formatDate(date){
  let minuites = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minuites<10){
    minuites= `0${minuites}`;
  }

  if (hours<10){
    hours = `0${hours}`;
  }

  let days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ];

  let formatedDay= days[day];
  return `${formatedDay} ${hours}: ${minuites}`;
}

export let searchForm = document.querySelector("#search-form");
export let currentDateElement = document.querySelector("#current-date");
export let currentDate = new Date();

