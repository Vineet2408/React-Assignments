
import { Fragment,useState,useEffect } from 'react';
import {useParams,Link} from 'react-router-dom';
import User from '../components/user/User';
import axios from 'axios';

const UserDetail =(props)=>{
    const params = useParams();

    const [user,setUser] = useState();

    useEffect(() => {
        userHandler();
    }, [])
    
    const userId = params.userId;
    async function userHandler(){
        try{
        const response = await axios.get(`http://localhost:8080/user/${userId}`);
        const data = await response.data;
      
            console.log(data.user)
            setUser(data.user);
        }
        catch(err)
        {
            console.log(err)
        }
    
    }
   
    let empty={};
    console.log(user);
    return (
        <Fragment>
            <User user={(user)?user:empty}/>
            <div className="row justify-content-center">
                <div className="col-3">
                    <Link className='btn btn-primary' to='/products'>Products</Link>
                </div>
                
            </div>
        </Fragment>
    );
}

export default UserDetail;