import React from 'react'

const Navbar = () => {
  return (
    <div className='flex p-4 items-center justify-between'>
        <div><img src="/logo.png" alt="" /></div>
        <div>
            <ul className='flex gap-10'>
                <li>ফিচারসমূহ</li>
                <li>চর্চা সাফল্য</li>
                <li>সাবস্ক্রিপশন</li>
            </ul>
        </div>
        <div>
            <button className='bg-[#017A47] rounded-2xl p-4 shadow-[0px_8px_0px_#004F2E]'>সাইন আপ করো</button>
        </div>
    </div>
  )
}

export default Navbar 