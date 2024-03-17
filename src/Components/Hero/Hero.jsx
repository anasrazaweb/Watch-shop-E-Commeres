import React from 'react'
import Button from '../Button'
import WatchHero from '../../../src/img/watchhero.png'

const Hero = () => {
    return (
        <div className=' flex justify-center '>
            <div className='w-[60%] flex justify-center ' >
                <img src={WatchHero}
                    className='h-[70vh]'
                />

            </div>
            <div className='w-[50%] flex justify-start  items-center '>
                <div className='containt'>
                    <h5 className="text-2xl font-semibold">NEW</h5>
                    <h1 className="text-[3.5rem] mt-3 tracking-tight leading-none font-semibold">Pure Luxuary</h1>
                    <p className="text-[20px] mt-3 font-semibold">Blue omage SA</p>
                    <p className="text-[15px] font-semibold">$ 3,406</p>
                    <div className='flex mt-6 gap-4  font-semibold'>
                        <Button>Discover</Button>
                        <Button>Add to Card</Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hero