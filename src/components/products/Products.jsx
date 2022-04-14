import React from 'react'
import CategoriesProduct from './CategoriesProduct';
import { categoryProducts } from '../../data/api';
export default function Products() {
  return (
    <div>
        {categoryProducts?.map(categoryProduct =>{
            return <CategoriesProduct key={categoryProduct.id} 
                                    categoryProduct={categoryProduct} 
                                    />
        })}
    </div>
  )
}
