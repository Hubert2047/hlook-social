import React from 'react'
import Product from './Product'
import './products.scss'
import { MdLocationOn } from "react-icons/md";

export default function CategoriesProduct({categoryProduct}) {
  return (
    <div className="category-product">
        <div className="category-product__header">
            <h2 className="category-product__title">{categoryProduct.title}</h2>
            <div className="category-product__address">
              <MdLocationOn/>
              <a href="#" className="category-product__address">{categoryProduct.address}</a>
            </div>
        </div>
        <div className="category-product__list-product">
            {categoryProduct.products?.map(product =>{
                return <Product key={product.id} product={product}/>
            })}
        </div>
    </div>
  )
}
