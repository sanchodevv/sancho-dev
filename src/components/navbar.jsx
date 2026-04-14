import React from 'react'
import { MenuData } from '../contants/menuData'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="navbar">
        {MenuData.map(( route, index) => (
            <Link className='link' key={index} to={route.path}>
                {route.name}
            </Link>
        ))}
    </div>
  )
}

export default Navbar
