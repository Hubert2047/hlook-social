import React from 'react'
export default function Product({product}) {
  return (
    <div className="product">
            <img src={product.img} className="product__img" alt="product"></img>
            <p className="product__price">{`$NT ${product.price}`}</p>
            <div className="product__name">{product.name}</div>
            <p className="product__address">{product.address}</p>
    </div>
  )
}
