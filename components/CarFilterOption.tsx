import React, { useState } from 'react'

function CarFilterOption(props: any) {
  const [selectVal, setSelectVal] = useState<string>('')

  const handleChange = (val: string) => {
    setSelectVal(val)
    props.handleFilter(val)
  }

  return (
    <div className='mx-20 my-10 flex items-center justify-around'>
      <div>
        <h2 className='text-3xl font-bold'>Cars Catalog</h2>
        <span className='text-sm'>Explore our cars you might likes</span>
      </div>
      <select
        className='p-2 w-[160px] text-gray-300 rounded-md'
        value={selectVal}
        onChange={(e) => handleChange(e.target.value)}>
        <option value={''}>--SELECT--</option>
        {
          props.brandList.map((brand: string, i: number) => (
            <option key={i} value={brand}>{brand}</option>
          ))
        }
      </select>
    </div>
  )
}

export default CarFilterOption