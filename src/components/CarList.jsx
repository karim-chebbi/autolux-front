import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_cars } from '../JS/Actions/CarActions'
import { Link } from 'react-router-dom'

const CarList = () => {
  const dispatch = useDispatch()

  const cars = useSelector(state=> state.carReducer.cars)


  useEffect(() => {
    dispatch(get_cars())
  }, [dispatch])
  

  console.log(cars)
  return (
    <div className="bg-white py-8">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {cars.map((car) => (
            <div key={car._id} className="group relative">
              <img
                alt="..."
                src={car.image}
                className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
              />
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link to={`/car_description/${car._id}`}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {car.brand}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{car.model}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  $ {car.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarList