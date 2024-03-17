import React from 'react'

const Button = ({ children }) => {
    return (
        <button className=' text-wrap bg-blue-100 px-4 py-2  rounded-xl shadow-2xl'>{children}</button>
    )
}

export default Button