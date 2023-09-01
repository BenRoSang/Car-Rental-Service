import Image from 'next/image'
import React from 'react'
import bannerImage from '../../public/banner.png'
import Link from 'next/link'

function Banner() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 px-20 items-center py-10'>
        <div>
            <h1 className='text-3xl mb-3 text-green-600'>Premium Car Renting Services</h1>
            <p className='text-l'>
                Book the selected Car effortlessly, <br />
                Pay for driving only, Book the car now...
            </p>
            <Link className='bg-green-700 px-4 py-2 rounded inline-block mt-4' href={'/'}>Explore Cars</Link>
        </div>
        <Image src={bannerImage} alt='Car Image'/>
    </div>
  )
}

export default Banner