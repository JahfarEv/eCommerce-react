import React, { useContext } from 'react'
import { Products } from '../../Products'
import { ShopContext } from '../../Context/Shop-Context'
import {CartItem}   from './../Cart/Cart-Item'
import './Cart.css'
import {useNavigate} from 'react-router-dom'


const Cart = () => {
  const { cartItems,getTotalAmount } = useContext(ShopContext);
  const totalAmount=getTotalAmount()
  const navigate = useNavigate()
  return (
    <div className='cart'>
      <div><h1>Your Cart Items</h1></div>
      <div className='cartItems'>
      {Products.map((product)=>{
        if(cartItems[product.id] !==0){
          return <CartItem data={product} />
        }
      })}
      </div>
      {totalAmount > 0 ?(
      <div className='checkout'>
      
        <p>Subtotal: RS{" "}{totalAmount}</p>
        <button onClick={()=>navigate("/")}>Continue Shopping</button>
        <button>Checkout</button>
      </div>)
      :(<h1>Your Cart Is Empty</h1>)}
    </div>
    
  )
}

export default Cart
