import React from 'react'
import contactPng from '../public/contact.png'
import Image from 'next/image'
import facebook from '../public/facebook.png'
import instagram from '../public/instagram.png'
import twitter from '../public/twitter.png'
import linkedIn from '../public/linkedin.png'


function contact() {
    return (
        <div className='flex gap-5 my-10 mx-20 justify-between items-center'>
            <Image src={contactPng} width={500} height={400} alt='Contact Image' />
            <div className='flex-grow'>
                <h1 className='text-4xl'>Contact Us</h1>
                <form action="/">
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-md" />
                    </div>
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Type here" className="input input-bordered w-full max-w-md" />
                    </div>
                    <div className="form-control w-full max-w-md">
                        <label className="label">
                            <span className="label-text">Message</span>
                        </label>
                        <textarea className="textarea textarea-bordered h-24" placeholder="Type.."></textarea>
                    </div>
                    <button className='mt-3 hover:bg-green-700 p-2 border-[1px] border-gray-400 rounded'>Submit</button>

                </form>
                <div className='flex gap-5 mt-5'>
                    <a className='hover:cursor-pointer' rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#009988" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg>
                    </a>
                    <a className='hover:cursor-pointer' rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#009988" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            <path d="M16.5 7.5l0 .01" />
                        </svg>
                    </a>
                    <a className='hover:cursor-pointer' rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#009988" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                            <path d="M8 11l0 5" />
                            <path d="M8 8l0 .01" />
                            <path d="M12 16l0 -5" />
                            <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                        </svg>
                    </a>
                    <a className='hover:cursor-pointer' rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#009988" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default contact