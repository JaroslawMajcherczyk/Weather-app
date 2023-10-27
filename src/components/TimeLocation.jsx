import { formatToLocalTime } from "../services/weatherService"


const TimeLocation = ({weather: {dt, timezone, name, country}}) => {
  return (
    <div>
        <div className='flex items-center justify-center my-6'>
               
                <p className='text-white text-xl font-light'>
                       {formatToLocalTime(dt,timezone)}
                </p>

        </div>
        <div className='my-3 flex justify-center items-center'>
            <p className='text-white text-3xl font-bold'>{`${name}, ${country}`}</p>
        </div>
    </div>
  )
}

export default TimeLocation