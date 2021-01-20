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
          className="justify-center mb-2 text-left align-middle bg-yellow-100 rounded-md shadow-md cursor-pointer w-60"
          key={city.place_id}
        >
          <p
            className="p-2 mx-auto text-sm"
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
          className="justify-center mb-2 text-left align-middle rounded-md shadow-md cursor-pointer hover:bg-gray-200 w-60 bg-gray-50"
          key={city.place_id}
        >
          <p
            className="p-2 mx-auto text-sm"
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
