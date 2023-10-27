import { UilSearchAlt, UilLocationPinAlt  } from '@iconscout/react-unicons'
import { useState } from 'react'
import { toast } from 'react-toastify';


export const Inputs = ({setQuery, units, setUnits}) => {
  
  const [city, setCity] = useState('');

  const handleSearchClick = () => {
    if (city !== "") setQuery({q: city})
  }

const handleLocationClick = () => {
  if (navigator.geolocation) {
    toast.info('Pobranie lokalizacji urzytkownika.')
    navigator.geolocation.getCurrentPosition((position) => {
      toast.success('Lokalizacja pobrana.')
      let lat = position.coords.latitude
      let lon = position.coords.longitude

      setQuery({lat, lon})
    })
  }
}

const handleUnitsChange = (e) => {
  const selectedUnit = e.currentTarget.name;
  if(units !== selectedUnit ) setUnits(selectedUnit);
}

  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input type="text" 
            value={city}
            onChange={(e) => setCity(e.currentTarget.value)}
            placeholder='Szukaj miasta...'
            className='placeholder:lowercase capitalize focus:outline-none p-2 w-full shadow-xl text-xl font-light' />
            <UilSearchAlt type="submit" size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={handleSearchClick}
            />
            <UilLocationPinAlt size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"
            onClick={handleLocationClick}
            />
        </div>
        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button onClick={handleUnitsChange}
            name="metric" className='text-xl transition ease-out hover:scale-125 text-white font-light'>
            &deg; C
            </button>
            <p className='text-xl text-white mx-2'>|</p>
            <button onClick={handleUnitsChange} name="imperial" className='text-xl transition ease-out hover:scale-125 text-white font-light'>
            &deg; F
            </button>
        </div>
    </div>
  )
}
