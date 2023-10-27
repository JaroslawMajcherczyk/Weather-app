import { useEffect, useState } from "react"
import Forecust from "./components/Forecust"
import { Inputs } from "./components/Inputs"
import TempAndDetails from "./components/TempAndDetails"
import TimeLocation from "./components/TimeLocation"
import TopButton from "./components/TopButton"
import getFormattedWeatherData from "./services/weatherService"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  const [query, setQuery] = useState({q: 'Kielce' })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

useEffect(() => {
  const fatchWeather = async () =>
  {
    const message = query.q ? query.q : "poprawnej lokalizacji.";

    toast.info("Pobierasz pogode z " + message);

 await getFormattedWeatherData({...query, units}).then((data) =>{

  toast.success(`Prawidłowe pobranie pogody z ${data.name} , ${data.country}`)

  setWeather(data);
  
 })
  };
 
  fatchWeather();
  
}, [query, units]);

const formatBackground = () => {
  if(!weather) return 'from-cyan-700 to-blue-800'
  const threshold = units === "metric" ? 20 : 60
  if (weather.temp <= threshold) return 'from-cyan-700 to-blue-800'

  return "from-yellow-600 to-orange-600"
}

console.log(weather)
  return (
    <>
    <div className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-800 to-blue-700 h-fit shadow-xl shadow-gray-400 
    ${formatBackground()}`}>
      <TopButton setQuery={setQuery}/>
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits}/>

        {weather && (
          <div> 
        <TimeLocation weather={weather} />
        <TempAndDetails  weather={weather}/>
        <Forecust title={"Pogoda z ostatnich godzin"} items={weather.hourly}/>
        <Forecust title={"Pogoda na najbliższe dni"} items={weather.daily}/>
          </div>
          )}

    <ToastContainer autoClose={2000} theme="colored"  newestOnTop={true}/>

    </div>
   
    </>
  )
}

export default App
