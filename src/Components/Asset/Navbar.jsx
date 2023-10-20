import React from 'react'
import { Link } from 'react-router-dom'
import {ShoppingCart} from 'phosphor-react'
import './Navbar/Navbar.css'



const Navbar = () => {
  return (
    <div>
    <div className='Navbar'>
    <div className="link">
        <Link to='/shop'>Shop</Link>
        <Link to='/'>Login</Link>
        <Link to='/cart'>
            <ShoppingCart size={32} />
        </Link>
      
    </div>
    
   
   
        
   
    </div>
    <div className='Nav'></div>
    </div>
  )
}

export default Navbar
