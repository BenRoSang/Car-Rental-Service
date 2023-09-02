import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { GetStaticProps } from 'next'
import { GetCarLists, GetStoreLocation } from '@/services'
import request, { gql } from 'graphql-request'
import Banner from '../components/home/Banner.jsx'
import Search from '../components/home/Search.jsx'
import CarList from '../components/CarList'
import CarFilterOption from '../components/CarFilterOption'
import { useState } from 'react'
import { currentUser } from '@clerk/nextjs'

const inter = Inter({ subsets: ['latin'] })

export const getStaticProps: GetStaticProps = async () => {
    const res = await GetCarLists(process.env.API_END_POINT || '');
    const resLoc = await GetStoreLocation(process.env.API_END_POINT || "");
    return { props: { res, resLoc } }
}


export default function Home({res, resLoc}: any) {
  const [oriCarList, setOriCarList] = useState<any>(res.carLists)
  const [carList, setCarList] = useState<any>(res.carLists)
  const [brandList, setBrandList] = useState<any>(res.carLists[0].carBrand)

  const handleFilter = (brand: string) => {
    const filterVal = oriCarList.filter((car:any) => car.carBrand[0].toLowerCase() === brand.toLowerCase())
    setCarList(filterVal);
  }

  return (
    <main
      className={`${inter.className}`}
    >
      <Banner />
      <Search />
      <CarFilterOption brandList={brandList} handleFilter={handleFilter} />
      <CarList carList={carList} storeLocations={resLoc.storeLocations} />
    </main>
  )
}



