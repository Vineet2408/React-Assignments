
import axios from 'axios';
import UserList from '../components/user/UserList';
import {Fragment, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import InfoModal from '../components/layout/InfoModal';
const Users =(props)=>{

    const [info,setInfo] = useState();
    let [list,setList] = useState([]);
    let [page,setPage] = useState(1);
    let [totalUsers,setTotalUsers] = useState(0);
    let [lastUser,setLastUser] = useState(1);

    const infoHandler=(user)=>{
        setInfo(user);
    }

    useEffect(()=>{
        console.log(info);
    },[info]);
   
    useEffect(()=>{
        console.log('inside effect');
        fetchUserHandler(page);
        if(page<=1)
        {
            document.getElementById("prev").disabled=true;
        }
        else
        {
            document.getElementById("prev").disabled=false;
        }
        
        //  if(totalUsers === lastUser)
        //     {
        //         document.getElementById("next").disabled=true;
        //     }
        //     else {
        //         document.getElementById("next").disabled=false;
        //     }
        
        
    },[page]);

    async function fetchUserHandler(pageNumber)
    {
        try{
        
        const response = await axios.get(`http://localhost:8080/users?page=${pageNumber}`);
        const data = await response.data;
        setList(data.users);
        setTotalUsers(data.totalUsers);
        setLastUser(data.users[data.users.length - 1].id);
        console.log('t & l = ',totalUsers ,lastUser);
        }
        catch(err)
        {
            console.log(err);
        }

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
        
    }

    const dismissUserInfo=()=>
    {
        setInfo(null);
    }
       
    
    return (
        <Fragment>
            {console.log('info = ',info)}
            {(info) && (<InfoModal user={info} 
            title="User Info" onDismiss={dismissUserInfo}></InfoModal>)}
            
            <div className="container-fluid bg-success">
                <div className='row justify-content-end'>
                    <div className="col-md-3">
                        <Link className="btn btn-warning mb-2 mt-2" to='/addUser'>Add User</Link>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <UserList list={list} infoHandler={infoHandler}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-2'>
                            <button name="prev" id="prev" style={button.prev} onClick={pageHandler}></button>
                        </div>
                        <div className='col-8'></div>
                        <div className='col-2'>
                            <button name="next" id="next" style={button.next} onClick={pageHandler}></button>
                        </div>
                    </div>
                </div>

            </div>
            
        </Fragment>
        
    );
}

export default Users;