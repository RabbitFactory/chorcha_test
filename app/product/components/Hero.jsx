import React from 'react'

const Hero = () => {
  return (
    <div className='flex gap-40 justify-center items-center mt-32'>
        <div className='max-w-[500px] space-y-4'>
            <h1 className='text-5xl'>চর্চা করো নিজের গতিতে</h1>
            <p>সিলেবাসের যেকোন টপিক থেকে প্রশ্ন খুঁজে প্র্যাকটিস করো, AI দিয়ে ব্যাখ্যা বুঝে নাও, আর মক টেস্ট দিয়ে নিজের প্রস্তুতি মাপো।</p>
            <div className='flex gap-5'>
                <img src="/store.png" alt="" />
            <img src="/apple.png" alt="" />
            </div>
            <p>100k+ downloads |       4.6 Rating with over 8k Reviews</p>
        </div>
        <div>
            <img className='w-64' src="/Mockup 2.png" alt="" />
        </div>
    </div>
  )
}

export default Hero