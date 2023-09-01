import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

function Navbar() {
    return (
        <div className='flex justify-between items-center py-5 border-b-[1px] px-20 border-b-white'>
            <h2 className='text-2xl italic'>Car Rental</h2>
            <div className='flex gap-5 items-center'>
                <Link className='hover:text-black hover:bg-gray-400 py-2 px-4 rounded-md ' href="/">Home</Link>
                <Link className='hover:text-black hover:bg-gray-400 py-2 px-4 rounded-md ' href="/history">History</Link>
                <Link className='hover:text-black hover:bg-gray-400 py-2 px-4 rounded-md ' href="/contact">Contact Us</Link>
                <UserButton afterSignOutUrl='/' />
            </div>
        </div>
    )
}

export default Navbar