import React from 'react'

const Card = ({ children, className }) => {
    return (
        <div className={`border rounded-md border-gray-600 p-4 ${className}`}>
            {children}
        </div >
    )
}

export default Card