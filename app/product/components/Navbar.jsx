import React from 'react'

const Navbar = () => {
  return (
    <div className='flex p-4 items-center justify-around'>
        <div><img src="/logo.png" alt="" /></div>
        <div className='flex items-center bg-white rounded-full px-6 py-2'>
            <img src="/search1.png" alt="" />
            <input className='bg-white p-2 rounded-full border-none placeholder-gray-400' placeholder='Search Products...' type="text" />
            <img src="/search2.png" alt="" />
        </div>
        <div>Cart</div>
        <div>Login</div>
    </div>
  )
}

export default Navbar