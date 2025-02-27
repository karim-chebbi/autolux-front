import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { get_car_byid } from '../JS/Actions/CarActions'
import BackBtn from '../components/BackBtn'
import DeleteCar from '../components/DeleteCar'
import EditCar from '../components/EditCar'

const CarDescription = () => {
    const dispatch = useDispatch()

    const car = useSelector(state=> state.carReducer.car)

    const {id} = useParams()

    useEffect(() => {
      dispatch(get_car_byid(id));
    }, [dispatch, id])
    

    const features = [
      { name: "Brand", description: car.brand },
      {
        name: "Model",
        description:
          car.model
      },
      { name: "Fuel", description: car.fuel },
      {
        name: "Year",
        description: car.year
      },
      { name: "Price", description: car.price },
    ];
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-16 sm:px-6  lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <div className='py-4'>
            <BackBtn />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Technical Specifications
          </h2>
          <p className="mt-4 text-gray-500">{car.description}</p>

          <div className='flex gap-4 mt-2'>
            <EditCar />
            <DeleteCar />
          </div>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd className="mt-2 text-sm text-gray-500">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="w-full">
          <img
            alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            src={car.image}
            className="rounded-lg bg-gray-100"
          />
        </div>
      </div>
    </div>
  );
}

export default CarDescription