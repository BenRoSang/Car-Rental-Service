import Image from 'next/image'
import React from 'react'

function HistoryCard({booking}: any) {
  return (
    <div className='mx-20 my-10 p-2'>
      <div className='w-9/12 m-auto flex justify-evenly border-[1px] border-gray-400 p-4 rounded-md'>
        <div className='w-[150px] h-[150px] rounded-md border-gray-400 border-[1px] overflow-hidden'>
          <h1 className='ml-3'>{booking.carId.name}</h1>
          <p className='ml-3'>$ <span className='font-bold text-xl'>{booking.carId.price}</span>/day</p>
          <div className='w-[150px]'>
            <Image src={booking.carId.image.url} width={0} height={0} sizes='100vw' className='rounded-b-md border-[1px] border-gray-400' style={{objectFit: "contain", width: '100%', height: 'auto'}} alt='car image' />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-sm">
            <tbody>
              {/* row 1 */}
              <tr className='hover'>
                <th>Pick up location</th>
                <td>{booking.location}</td>
              </tr>
              <tr className="hover">
                <th>Pick up Date - Drop off Date</th>
                <td>{booking.pickUpDate} - {booking.dropOffDate}</td>
              </tr>
              <tr className="hover">
                <th>Pick up Time - Drop off Time</th>
                <td>{booking.pickUpTime} - {booking.dropOffTime}</td>
              </tr>
              <tr className="hover">
                <th>Contact Number</th>
                <td>{booking.contactNumber}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default HistoryCard