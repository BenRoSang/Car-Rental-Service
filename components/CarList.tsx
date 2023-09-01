import { useState } from 'react'
import CarCard from './CarCard'
import { useUser } from '@clerk/nextjs';
import { CreateBooking } from '@/services';

function CarList(props: any) {
  const [modalVal, setModalVal] = useState<any>(null);
  const [pickUpLoc, setPickUpLoc] = useState<string>('')
  const [pickUpDate, setPickUpDate] = useState<string>('')
  const [dropOffDate, setdropOffDate] = useState<string>('')
  const [pickUpTime, setPickUpTime] = useState<string>('')
  const [dropOffTime, setDropOffTime] = useState<string>('')
  const [contactNumber, setContactNumber] = useState<string>('')
  const [isToast, setIsToast] = useState<boolean>(false)

  const { isLoaded, isSignedIn, user } = useUser();

  const handleModal = (car: any) => {
    (window as any).car_modal.showModal();
    setModalVal(car)
  }

  const handleSubmit = async() => {

    const req_data = {
      location: pickUpLoc,
      pickUpDate,
      dropOffDate,
      pickUpTime,
      dropOffTime,
      contactNumber,
      userName: user?.fullName,
      carId: modalVal.id
    }

    const res = await CreateBooking(req_data);

    if(res) {
      setPickUpLoc('')
      setPickUpDate('')
      setDropOffTime('')
      setPickUpTime('')
      setDropOffTime('')
      setContactNumber('')
      setIsToast(true);
      window.setTimeout(() => {
        setIsToast(false)
    }, 2000);

    }
  }

  if(props.carList.length === 0) {
    return (
      <div className='mx-20 my-10 mb-20 text-center'>
        <h1 className='font-bold text-3xl'>!Oops there is no car...</h1>
      </div>
    )
  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 mx-20 gap-5 my-10'>
      {
        props.carList?.length > 0 && props.carList?.map( (car: any, i: number) => (
          <CarCard key={i} car={car} handleModal={handleModal} />
        ))
      }
      <div className={`toast ${isToast ? "block opacity-100": "hidden opacity-0"} transition-opacity duration-1000 ease-out`}>
        <div className="alert alert-success">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Thanks you for using our service.</span>
        </div>
      </div>

      <dialog id="car_modal" className="modal">
          <form method="dialog" className="modal-box w-11/12 max-w-5xl ">
            <h2 className='text-2xl text-gray-400 border-b-[1px] border-gray-400 mb-3'>Rent a car now..</h2>
            <div className='flex gap-7'>
              <div className='w-2/5'>
                <CarCard car={modalVal} />
              </div>
              <div className='text-white grow'>
                  <div className='mb-3'>
                    <label className='text-sm'>Pick up Location</label><br />
                    <select
                      className='select select-primary w-full max-w-xs'
                      value={pickUpLoc}
                      onChange={(e) => setPickUpLoc(e.target.value)}>
                      <option value=''>--select--</option>
                      {
                        props.storeLocations.map((loc: any, i:number) => (
                          <option className='capitalize' value={loc.address} key={i}>{loc.address}</option>
                        ))
                      }
                    </select>
                  </div>
                  <div className='flex gap-5'>
                    <div className='mb-3'>
                      <label className='text-sm' htmlFor="">Pick up Date</label>
                      <input type="date"
                        onChange={(e) => setPickUpDate(e.target.value)}
                        value={pickUpDate}
                        placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <div className='mb-3'>
                        <label className='text-sm' htmlFor="">Drop Off Date</label>
                        <input type="date"
                          onChange={(e) => setdropOffDate(e.target.value)}
                          value={dropOffDate}
                          placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                  </div>
                  <div className='flex gap-5'>
                    <div className='mb-3'>
                      <label className='text-sm' htmlFor="">Pick up Time</label>
                      <input type="time"
                        onChange={(e) => setPickUpTime(e.target.value)}
                        value={pickUpTime}
                        placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                    <div className='mb-3'>
                        <label className='text-sm' htmlFor="">Drop Off Time</label>
                        <input type="time"
                          onChange={(e) => setDropOffTime(e.target.value)}
                          value={dropOffTime}
                          placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                  </div>
                  <div className='mb-3'>
                        <label className='text-sm' htmlFor="">Contact Number</label><br />
                        <input type="number"
                          onChange={(e) => setContactNumber(e.target.value)}
                          value={contactNumber}
                          placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
                    </div>
                  <div className="modal-action justify-start">
                    {/* if there is a button, it will close the modal */}
                    <button onClick={handleSubmit} className="btn hover:bg-green-500 text-gray-200 bg-green-700 py-1">Save</button>
                    <button className="btn border-gray-300 py-1">Close</button>
                  </div>
              </div>
            </div>
          </form>
      </dialog>
    </div>
  )
}

export default CarList