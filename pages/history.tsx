import { GetBooking } from '@/services';
import { GetStaticProps } from 'next';
import React from 'react'
import HistoryCard from '@/components/HistoryCard';

export const getStaticProps: GetStaticProps = async () => {
    const bookings = await GetBooking();
    return { props: { bookings } }
}

function history({bookings}: any) {
    console.log(bookings)
    return (
        <div>
            {
                bookings.bookings.map((booking: any, i: number) => (
                    <HistoryCard key={i} />
                ))
            }
        </div>
    )
}

export default history