import React from 'react'
import Card from '../Card'


const Arrival = () => {
    const Data = [
        {
            Name: "Tissot",
            price: "$ 9.40",
            img: "https://pullazpsprdeu-4c63.kxcdn.com/product/migrated/relgiodepulso-wb-vogue100260v3_h_f_en.png?version=7fc914c086f2ee88fccab78080d2cc4f"

        },
        {
            Name: "Tissot",
            price: "$ 9.40",
            img: "https://pullazpsprdeu-4c63.kxcdn.com/product/migrated/relgiodepulso-wb-antwerp100124v3_h_f_en.png?version=7c81feed79ebf0d064a29223879f8910"

        },
        {
            Name: "Tissot",
            price: "$ 9.40",
            img: "https://cdnspecseu.bizay.com/product/migrated/relgiodepulso-wb-palace100347v3_h_f_en.png"

        },
        {
            Name: "Tissot",
            price: "$ 9.40",
            img: "https://cdnspecseu.bizay.com/product/migrated/relgiodepulso-wb-enzo100592v3_h_f_en.png"

        },
    ]
    return (
        <div className=' mt-10'>
            <div className='flex justify-center'>
                <h1 className='text-4xl font-bold'>New Arival</h1>
            </div>
            <div className=' flex justify-evenly mt-10'>
                {
                    Data.map((item, index) => (
                        <Card Data={item} key={index} />
                    ))
                }
            </div>
            
        </div>
    )
}

export default Arrival