import Image from 'next/image'
import React from 'react'

const LoginNavbar = () => {
  return (
    <nav className='w-full flex items-center justify-center bg-black border-b border-[#25262B]'>
        <Image src={"/Login/logo.svg"} alt='' height={24} width={156} className='py-2.5'/>
    </nav>
  )
}

export default LoginNavbar