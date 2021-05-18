import {Fragment, useEffect,useState} from 'react';
import axios from 'axios';
import ProductList from '../components/product/ProductList';
import InfoModal from '../components/layout/InfoModal';
const Products =(props)=>{

    let [list,setList] = useState([]);

    let [page,setPage] = useState(1);

    let [info,setInfo] = useState();

    let totalProducts=1;

    const infoHandler=(user)=>{
        setInfo(user);
    }

    useEffect(()=>{
        console.log(info);
    },[info]);

    useEffect(()=>{
        fetchProductHandler(page);
        if(page<=1)
        {
            document.getElementById("prev").disabled=true;
        }
        else
        {
            document.getElementById("prev").disabled=false;
        }
    },[page]);

    async function fetchProductHandler(pageNumber)
    {
        const response = await axios.get(`http://localhost:8080/products?page=${pageNumber}`);
        const data = await response.data;
        setList(data.products);
        totalProducts = data.totalProducts;
        console.log(totalProducts);
    }

    const button={
        
        prev:{
            backgroundImage: `url(${"https://findicons.com/files/icons/129/soft_scraps/128/button_previous_01.png"})`,
            width: 30,
            height: 30,
            borderRadius:"50%",
            backgroundSize: "cover"
        },
        next:{
            backgroundImage: `url(${"https://icons.iconarchive.com/icons/hopstarter/soft-scraps/256/Button-Next-icon.png"})`,
            width: 30,
            height: 30,
            borderRadius:"50%",
            backgroundSize: "cover"

        }
    };

    const dismissProductInfo=()=>
    {
        setInfo(null);
    }

const pageHandler = (event)=>{
    console.log(event.target.name);
    if(event.target.name ==='prev')
    {
        setPage(page-1);
        
    }
     if(event.target.name ==='next')
    {
        setPage(page+1);
    }
    console.log(page);
}


  
    return (
        <Fragment>
        {(info) && (
            <InfoModal prod={info} 
                title="Product Info" 
                onDismiss={dismissProductInfo}>
            </InfoModal>
            )}

        <ProductList list={list} infoHandler={infoHandler}/>
        <div className="row">
            <div className="col-2">
                <button id='prev' name='prev' style={button.prev} onClick={pageHandler}></button>
            </div>
            <div className="col-8">
                
            </div>
            <div className="col-2">
                <button id='next' name='next' style={button.next} onClick={pageHandler}></button>
            </div>
        </div>
        </Fragment>
    );
}

export default Products;