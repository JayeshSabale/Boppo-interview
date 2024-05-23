import React, { useContext, useState } from 'react'
import { CartContext } from '../Features/ContextProvider'
import CartProduct from '../Components/CartProduct'
import { totalItem, totalPrice } from '../Features/CartReducer'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cart } = useContext(CartContext)

  if (cart.length === 0) {
    return (
      <h1 style={{ textAlign: 'center' }}>
        No items add some <Link to="/">Go to All Products</Link>
      </h1>
    )
  }

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-8">
          {cart.map((p) => (
            <CartProduct product={p}></CartProduct>
          ))}
        </div>
        <div className="col-4 ">
          <div className="bg-secondary p-3 text-white">
            <h5>Total Items: {totalItem(cart)}</h5>
            <h5>Total Price: ${totalPrice(cart)} </h5>
            <button className="btn btn-warning">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
