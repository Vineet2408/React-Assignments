
import React from 'react';
import Product from './Product';

const ProductList = (props)=>{
    return (
            <div className='container-fluid text-white bg-dark'>
                <div className="row">
                    {props.list.map((prod,index)=>
                        <div className="col-md-4" key={index}>
                            <Product prod={prod}>
                                {prod.title}
                            </Product>
                        </div>)}
                </div>
            </div>
    );
}

export default ProductList;