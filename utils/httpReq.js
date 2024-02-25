const API_KEY = "4fc458e2f6e652547957c5b1775aca32";
const BASE_URL = `https://api.openweathermap.org/data/2.5`;

const getWeatherData = async (type, data) => {
   let url = null;

   switch (type) {
      case "current":
         {
            if (typeof data === "string") {
               url = `${BASE_URL}/weather?q=${data}&units=metric&appid=${API_KEY}`;
            } else {
               url = `${BASE_URL}/weather?lat=${data.latitude}&lon=${data.longitude}&units=metric&appid=${API_KEY}`;
            }
         }
         break;
      case "forecast":
         {
            if (typeof data === "string") {
               url = `${BASE_URL}/forecast?q=${data}&units=metric&appid=${API_KEY}`;
            } else {
               url = `${BASE_URL}/forecast?lat=${data.latitude}&lon=${data.longitude}&units=metric&appid=${API_KEY}`;
            }
         }
         break;
      default:
         url = `${BASE_URL}/weather?q=isfahan&units=metric&appid=${API_KEY}`;
         break;
   }
   try {
      const res = await fetch(url);
      const json = await res.json();
      if(+json.cod===200){
         return json;
      }else{
         alert(json.message)
      }
   } catch (error) {
    alert("connection lost!")
   }
}
export default getWeatherData;