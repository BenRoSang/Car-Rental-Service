import Image from 'next/image'
import React from 'react'
import Steering from '../public/steering.png'
import Seat from '../public/seat.png'
import Fuel from '../public/fuel.png'
import Link from 'next/link'

function CarCard({car, handleModal}: any) {
  const openModal = () => {
    if(handleModal) {
      handleModal(car)
    }
  }
  if(!car) {
    return
  }
  return (
    <div className='text-gray-400 group
    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300
    '>
        <Image src={car?.image.url} width={0} height={0} sizes='100vw' className='rounded-t-md border-[1px] border-gray-400' style={{objectFit: "contain", width: '100%', height: 'auto'}} alt='car image' />
        <div className='group-hover:hidden flex justify-evenly text-black items-center text-center bg-gray-300 py-2 rounded-b-md'>
          <span>
            <Image src={Steering} width={30} className='text-white m-auto' height={50} alt='car steering' />
            <p className='text-sm'>{car?.carType}</p>
          </span>
          <span>
            <Image src={Seat} width={30} className='text-white m-auto' height={50} alt='car steering' />
            <p className='text-sm'>{car?.seat}</p>
          </span>
          <span>
            <Image src={Fuel} width={30} className='text-white m-auto' height={50} alt='car steering' />
            <p className='text-sm'>{car.carAvg} MPG</p>
          </span>
        </div>
        <div
          onClick={openModal}
          className='hidden group-hover:block bg-gray-300 p-2 rounded-b-md text-white'>
          <span className='block bg-gray-700 rounded-lg flex justify-between px-2 py-3'>
            <span>Rent Now..</span>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M4.72 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 010-1.06zm6 0a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            </span>
          </span>
        </div>
    </div>
  )
}

export default CarCard