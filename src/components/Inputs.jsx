import { UilSearchAlt, UilLocationPinAlt  } from '@iconscout/react-unicons'


export const Inputs = () => {

  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input type="text" 
            placeholder='Szukaj miasta...'
            className='placeholder:lowercase capitalize focus:outline-none p-2 w-full shadow-xl text-xl font-light' />
            <UilSearchAlt  size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
            <UilLocationPinAlt size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
        </div>
        <div className='flex flex-row w-1/4 items-center justify-center'>
            <button name="metric" className='text-xl text-white font-light'>
            &deg; C
            </button>
            <p className='text-xl text-white mx-2'>|</p>
            <button name="imperial" className='text-xl text-white font-light'>
            &deg; F
            </button>
        </div>
    </div>
  )
}
