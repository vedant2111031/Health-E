import React from 'react'
import HashLoader from 'react-spinners/HashLoader'

const Loading = () => {
  return (
    <div className='flex item-center justify-center w-full h-full  '>
      <HashLoader color="#0067FF"/>
    </div>
  )
}

export default Loading
