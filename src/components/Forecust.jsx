

const Forecust = ({title}) => {
  return (
    <div>
            <div className="flex items-center justify-start my-6">

                <p className="text-white font-medium uppercase">
                   {title}
                </p>

            </div>
            <hr className="my-2"/>
            <div className="flex flex-row items-center justify-between text-white">
              <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">
                  04:23 PM
                </p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Flat_tick_icon.svg" className="w-12 my-1" alt="" />
                <p className="font-medium"> 22 &deg;</p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">
                  04:23 PM
                </p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Flat_tick_icon.svg" className="w-12 my-1" alt="" />
                <p className="font-medium"> 22 &deg;</p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">
                  04:23 PM
                </p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Flat_tick_icon.svg" className="w-12 my-1" alt="" />
                <p className="font-medium"> 22 &deg;</p>
              </div>

              <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">
                  04:23 PM
                </p>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Flat_tick_icon.svg" className="w-12 my-1" alt="" />
                <p className="font-medium"> 22 &deg;</p>
              </div>
            </div>
    </div>
  )
}

export default Forecust