import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
  } from "@iconscout/react-unicons";
import { formatToLocalTime, iconUrlFromCode } from "../services/weatherService";

const TempAndDetails = ({weather: {
    details,
    icon,
    temp, 
    timezone,
    feels_like, 
    temp_min, 
    temp_max,
    sunrise,
    sunset,
    speed, 
    humidity}}) => {
  return (
    <div>

    <div className="flex items-center justify-center py-6 text-xl text-cyan-400">
            <p>{details}</p>
    </div>

    <div className="text-white py-3 flex flex-row items-center justify-between">
       <img src={iconUrlFromCode(icon)} 
       alt=""
       className="w-20" />

        <p className='text-5xl'>{`${temp.toFixed()}`}&deg;</p>
        <div className='flex flex-col space-y-2'>
            <div className='flex font-light text-sm items-center justify-center'>
                <UilTemperature size={18} className="mr-1" />
                Odczuwalna:
                <span className="font-medium ml-2">{`${feels_like.toFixed()}`}&deg;</span>
            </div>
            <div className='flex font-light text-sm items-center justify-center'>
                <UilTear size={18} className="mr-1" />
                Wilgotność:
                <span className="font-medium ml-2">{`${humidity.toFixed()}`}&deg;</span>
            </div>
            <div className='flex font-light text-sm items-center justify-center'>
                <UilWind size={18} className="mr-1" />
                Wiatr:
                <span className="font-medium ml-2">{`${speed.toFixed()}`} km/h</span>
            </div>
        </div>
    </div>

    <div className="py-3 text-white text-sm flex flex-row justify-center items-center">

        <UilSun />
        <p className="font-light"> Wstaje: 
        <span className="font-medium ml-2">{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span></p>
        <p className="font-light mx-2">|</p>

        <UilSunset />
        <p className="font-light"> Zachodzi: 
        <span className="font-medium ml-2">{formatToLocalTime(sunset, timezone, "hh:mm a")}</span></p>
        <p className="font-light mx-2">|</p>

        <UilSun />
        <p className="font-light"> Najwyższa temp.: 
        <span className="font-medium ml-2">{`${temp_max.toFixed()}`}&deg;</span></p>

        <UilSun />
        <p className="font-light"> Najniższa temp.: 
        <span className="font-medium ml-2">{`${temp_min.toFixed()}`}&deg;</span></p>
        
    </div>

    </div>
  )
}

export default TempAndDetails