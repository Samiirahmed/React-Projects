import React from 'react'
import { Data } from './Data';
import Productlist from './Productlist';
import "../styles/product.css";


function product() {
  return (

    <div className='product'>
        <h1 className='productTitle'>Our Product</h1>
        <div className='productList'>

         {Data.map((d) => {
                   return (
                     <Productlist
                       name={d.name}
                       disc={d.disc}
                       price={d.price}
                       image={d.Image}
                     />
                   );
                 })}
        
        </div>
    </div>
  )
}

export default product