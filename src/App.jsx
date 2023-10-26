import Forecust from "./components/Forecust"
import { Inputs } from "./components/Inputs"
import TempAndDetails from "./components/TempAndDetails"
import TimeLocation from "./components/TimeLocation"
import TopButton from "./components/TopButton"
import getWeatherData from "./services/weatherService"

function App() {

  const fatchWeather = async () =>
  {
   const data = await getWeatherData('weather', {q: 'london'});
   console.log(data)
  }

  fatchWeather();

  return (
    <>
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-800 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <TopButton />
      <Inputs/>
      <TimeLocation />
      <TempAndDetails />
      <Forecust title={"Pogoda z ostatnich godzin"}/>
      <Forecust title={"Pogoda na najbliższe dni"}/>
    </div>
   
    </>
  )
}

export default App
