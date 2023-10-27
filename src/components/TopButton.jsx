

const TopButton = ({setQuery}) => {

    const cities = [
        {
            id: 0,
            title:"Londyn"
        },
        {
            id: 1,
            title:"Amsterdam"
        },
        {
            id: 2,
            title:"Warszawa"
        },
        {
            id: 3,
            title:"Berlin"
        },
        {
            id: 4,
            title:"Paryż"
        },
    ]

  return (
    <div className='flex items-center justify-around my-6'>
            {cities.map((city) => (
                <button key={city.id} onClick={() => setQuery({q: city.title})} className='text-white font-medium text-lg'>
                    {city.title}
                </button>
            ))}
    </div>
  )
}

export default TopButton