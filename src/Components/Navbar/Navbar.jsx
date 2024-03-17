import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-100 px-16 py-5'>
        <div className="logo text-2xl font-semibold">
            <h1>Stylo</h1>
        </div>
        <div>
            <ul className='flex gap-10 font-semibold'>
                <li><a href="" className=' hover:text-zinc-900 '>Home</a></li>
                <li><a href="">Product</a></li>
                <li><a href="">Arival</a></li>
                <li><a href="">Offer</a></li>
                <li><a href="">Colection</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar