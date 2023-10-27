import { useEffect, useState } from "react"
import Forecust from "./components/Forecust"
import { Inputs } from "./components/Inputs"
import TempAndDetails from "./components/TempAndDetails"
import TimeLocation from "./components/TimeLocation"
import TopButton from "./components/TopButton"
import getFormattedWeatherData from "./services/weatherService"

function App() {


  const [query, setQuery] = useState({q: 'Kielce' })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

useEffect(() => {
  const fatchWeather = async () =>
  {
 await getFormattedWeatherData({...query, units}).then((data) =>{
  setWeather(data);
  
 })
  };
 
  fatchWeather();
  
}, [query, units]);


console.log(weather)
  return (
    <>
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-800 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButton setQuery/>
      <Inputs setQuery units setUnits/>

        {weather && (
          <div> 
        <TimeLocation weather={weather} />
        <TempAndDetails  weather={weather}/>
        <Forecust title={"Pogoda z ostatnich godzin"} items={weather.hourly}/>
        <Forecust title={"Pogoda na najbliższe dni"} items={weather.daily}/>
          </div>
          )}
    </div>
   
    </>
  )
}

export default App
