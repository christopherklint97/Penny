interface DisplayResultsProps {
  cities: CityProps[]
  handleClick: (event: any) => Promise<void>
  select: any
}

export interface CityProps {
  place_id?: string
  description?: string
}

export default function DisplayResults({
  cities,
  handleClick,
  select,
}: DisplayResultsProps) {
  const cityCards = cities.map((city) => {
    if (select.place_id === city.place_id) {
      return (
        <div
          className="shadow-md cursor-pointer bg-green-100 text-left w-60 justify-center align-middle rounded-md mb-2"
          key={city.place_id}
        >
          <p
            className="text-sm mx-auto p-2"
            id={city.place_id}
            onClick={handleClick}
          >
            {city.description}
          </p>
        </div>
      )
    } else {
      return (
        <div
          className="shadow-md cursor-pointer hover:bg-green-100 text-left w-60 justify-center align-middle bg-gray-50 rounded-md mb-2"
          key={city.place_id}
        >
          <p
            className="text-sm mx-auto p-2"
            id={city.place_id}
            onClick={handleClick}
          >
            {city.description}
          </p>
        </div>
      )
    }
  })

  return <div>{cityCards}</div>
}
