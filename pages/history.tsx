import { GetBooking } from '@/services';
import { GetStaticProps } from 'next';
import React, { useEffect, useState } from 'react'
import HistoryCard from '@/components/HistoryCard';
import { useUser } from '@clerk/nextjs';

// export const getStaticProps: GetStaticProps = async () => {
    
//     const bookings = await GetBooking();
//     return { props: { bookings } }
// }

function History() {
    const { isLoaded, isSignedIn, user } = useUser();
    const [bookings, setBookings] = useState<any>(null)
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        const fetchBookings = async(userName:any) => {

            const bookings:any = await GetBooking(userName, process.env.NEXT_PUBLIC_API_END_POINT || '');
            setBookings(bookings)
            window.setTimeout(() => {
                setIsLoading(false)
            }, 2000);

        }
        fetchBookings(user?.fullName);

    }, [user?.fullName])

    if(isLoading) {
        return (
            <div className='flex justify-center items-center w-full h-[80vh]'>
                <div>
                    <span className="loading loading-ring loading-xs"></span>
                    <span className="loading loading-ring loading-sm"></span>
                    <span className="loading loading-ring loading-md"></span>
                    <span className="loading loading-ring loading-lg"></span>
                </div>
            </div>
        )
    }

    if(bookings.bookings.length === 0 ) {
        return (
            <div className='flex justify-center items-center w-full h-[80vh]'>
                <h1 className='text-2xl'>There is no history <span className='text-4xl'>🥺</span></h1>
            </div>
        ) 
    }
    return (
        <div>

            {
                bookings.bookings.map((booking: any, i: number) => (
                    <HistoryCard key={i} booking={booking} />
                ))
            }
        </div>
    )
}

export default History