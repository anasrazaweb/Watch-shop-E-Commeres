import React from 'react'
import Button from '../Button'
import Watch from '../../../src/img/Watch.png'

const About = () => {
    return (
        <div className='  '>
            <div className=' md:px-24  w-full '>
                <div className='flex  items-center'>
                    <div className=' w-full md:w-[50%] items-center mt-16 '>
                        <h1 className=' my-4 text-4xl font-bold'>Quartz Casio</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus expedita tempora ducimus! Fuga non reprehenderit numquam sed repellendus modi ipsa, autem voluptatem dolorum suscipit quidem. Debitis eos laboriosam repellendus in?</p>
                        <p className="my-5">$ 3,500</p>
                        <Button >Order Now</Button>
                    </div>
                    <div className=' w-full md:w-[50%] flex justify-center'>
                        <img src={Watch} alt="" className=' h-[50vh]' />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About