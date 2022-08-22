import React from 'react'

function Buttonblur() {
  return (
    <div className='relative w-20 h-6'>
        <div className='absolute bg-primary blur-lg	rounded-md top-0 left-0 w-20 h-6'/>
        <div className='absolute bg-primary border-1 rounded-lg border-white text-xs text-white font-medium font-[Poppins] top-0 left-0 w-20 h-6 flex justify-center items-center'>
            Download
        </div>
    </div>
  )
}

export default Buttonblur