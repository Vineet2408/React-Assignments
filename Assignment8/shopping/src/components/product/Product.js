import React,{Fragment, useContext} from 'react'
import { Link } from 'react-router-dom';
import AuthContext from '../../store/auth-context';
const Product = (props) => {
    let prod = props.prod;

    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    const role = authCtx.role;
    const isAdmin = (role==='admin')?true:false;

    console.log('prod = ', prod);
    if (!prod.title) {
        return <h1> No Product Found !!! </h1>
    }
    return (
        <Fragment>
           
            <div className="card card-mb-2 mt-2 bg-dark">
                <img className="elevated" alt='product-pic' src={prod.imageUrl} height="200"/>
                <div className="card-body">
                    <div className="row">
                        <div className="col-7"> <h5 className="card-title">{prod.title}</h5></div>
                        <div className="col-5"><p className="elevated text-center text-decoration-underline">Rs. {prod.price}</p></div>
                    </div>
                    <p><i>{prod.description}</i></p>
                    {
                        isLoggedIn &&   isAdmin && (
                            <Link className="btn btn-success" to={`/updateProduct/${prod.id}`}>Update</Link>
                        ) 
                    }
                    {
                        isLoggedIn && !isAdmin && (
                            <Link className="btn btn-success" to={`/addToCart/${prod.id}`}>Add to Cart</Link>
                        )
                    }
                </div>
               
            </div>
        </Fragment>



    );
}

export default Product;
