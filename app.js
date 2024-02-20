const API_KEY = "4fc458e2f6e652547957c5b1775aca32";

const BASE_URL = `https://api.openweathermap.org/data/2.5`;

const searchInput = document.querySelector("input")
const searchButton = document.querySelector("button")

const getCurrentWeatherByName = async (city) => {
   const url = `${BASE_URL}/weather?q=${city}&units=metric&appid=${API_KEY}`;
   const res = await fetch(url);
   const json = await res.json();
   return json;
}
const searchHandler = async () => {
   const cityName = searchInput.value;

   if (!cityName) {
      alert("Please enter city name!")
   }
   const currentData = await getCurrentWeatherByName(cityName);
   console.log(currentData);

}
searchButton.addEventListener("click", searchHandler);














