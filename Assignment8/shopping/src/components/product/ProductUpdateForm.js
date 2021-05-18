
import axios from 'axios';
import { useContext } from 'react';
import {useHistory} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

const ProductUpdateForm =(props)=>{

    const params = useParams();

    const prodId = params.prodId;
    const authCtx =  useContext(AuthContext);

    const token = authCtx.token;

    const history = useHistory();
    const submitForm =(event)=>{
        event.preventDefault();
        let prod = {
            id:prodId,
            title:event.target.elements.title.value,
            price:event.target.elements.price.value,
            description:event.target.elements.description.value,
            imageUrl:event.target.elements.imageUrl.value,
            token:token
            
        }
        axios.post(`http://localhost:8080/updateProduct/${prodId}`,prod).then(res=>{
            let updatedProduct = res.data.updatedProduct;
            console.log(updatedProduct);
            history.push(`/products`);
        });
    }

    const emailCheck =()=>{

    }

    return (
            <form  class="form-group container bg-dark text-white" onSubmit={submitForm}>
                <div class="row ">
                        <div class="col-md-10 offset-md-1">
                            <label for="name" ><strong>Title</strong></label>
                            <input class="form-control" id="title" onChange={emailCheck} type="text" name="title" placeholder="Enter Product Title" required></input> 
                            <label id="titleMessage"></label>
                        </div>
                </div>


                <div class="row">
                    <div class="col-md-10 offset-md-1">
                            <label for="age"><strong>Price</strong></label>
                            <input class="form-control"  type="number" name="price" placeholder="price" id="price"></input>
                            <label id='priceMessage'></label>
                    </div>
                </div>
            
                <div class="row">
                    <div class="col-md-10 offset-md-1">
                            <label for="lastName"><strong>Description</strong></label>
                            <input class="form-control"  type="text" name="description" placeholder="Product Description " id="description"></input>
                            <label id='descriptionMessage'></label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-10 offset-md-1">
                            <label for="profilePic"><strong>Product Image</strong></label>
                            <input class="form-control"  type="text" name="imageUrl" placeholder="Product Image Url" id="imageUrl"></input>
                            <button onClick='' className='btn btn-warning'>Preview {'->'}</button>
                    </div>
                </div>
                

                <div class="row ">
                        <div class="col-md-4 offset-md-5">
                            <button  class="btn btn-success" >Update</button>
                        </div>
                </div>
                    
            </form>
    );
}
export default ProductUpdateForm;