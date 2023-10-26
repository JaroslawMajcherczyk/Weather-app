

const TopButton = () => {

    const cities = [
        {
            id: 0,
            title:"london"
        },
        {
            id: 1,
            title:"nederland"
        },
        {
            id: 2,
            title:"poland"
        },
        {
            id: 3,
            title:"germany"
        },
    ]

  return (
    <div className='flex items-center justify-around my-6'>
            {cities.map((city) => (
                <button key={city.id} className='text-white font-medium text-lg'>
                    {city.title}
                </button>
            ))}
    </div>
  )
}

export default TopButton