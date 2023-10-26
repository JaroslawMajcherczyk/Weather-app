const API_KEY = "API_WEATHER_KEY";

const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + "/" + infoType)

    url.search = new URLSearchParams({...searchParams, appid:API_KEY})

       
        return fetch(url).then((res) => res.json())
};




export default getWeatherData;