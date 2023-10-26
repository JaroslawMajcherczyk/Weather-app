import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
  } from "@iconscout/react-unicons";

const TempAndDetails = () => {
  return (
    <div>

    <div className="flex items-center justify-center py-6 text-xl text-cyan-400">
            <p>claudy day</p>
    </div>

    <div className="text-white py-3 flex flex-row items-center justify-between">
        <UilSun size={55} className="text-yellow-400"/>

        <p className='text-5xl'>23 &deg;</p>
        <div className='flex flex-col space-y-2'>
            <div className='flex font-light text-sm items-center justify-center'>
                <UilTemperature size={18} className="mr-1" />
                Odczuwalna:
                <span className="font-medium ml-2">20 &deg;</span>
            </div>
            <div className='flex font-light text-sm items-center justify-center'>
                <UilTear size={18} className="mr-1" />
                Odczuwalna:
                <span className="font-medium ml-2">65% &deg;</span>
            </div>
            <div className='flex font-light text-sm items-center justify-center'>
                <UilWind size={18} className="mr-1" />
                Wiatr:
                <span className="font-medium ml-2">11 km/h &deg;</span>
            </div>
        </div>
    </div>

    <div className="py-3 text-white text-sm flex flex-row justify-center items-center">

        <UilSun />
        <p className="font-light"> Wstaje: 
        <span className="font-medium ml-2">6:30 AM</span></p>
        <p className="font-light mx-2">|</p>

        <UilSunset />
        <p className="font-light"> Zachodzi: 
        <span className="font-medium ml-2">07:30 PM</span></p>
        <p className="font-light mx-2">|</p>

        <UilSun />
        <p className="font-light"> Najniżej: 
        <span className="font-medium ml-2">28 &deg;</span></p>
        
    </div>

    </div>
  )
}

export default TempAndDetails