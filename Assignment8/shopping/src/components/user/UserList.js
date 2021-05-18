
import React, { Fragment,useEffect,useState } from 'react';
import User from './User';

import InfoModal from '../layout/InfoModal';

const UserList = (props)=>{


    return (
       <Fragment>
           
            <ul className='container list-group list-group-flush'>
                {
                props.list.map((user,index)=>
               
                    <li className="row card list-group-item mt-2" key={user.id}>
                        <div className="row">
                            <User user={user}></User>
                        </div>
            
                        <div className="row">
                            <button className="col-3 btn btn-primary" onClick={()=>props.infoHandler(user)}>View Details</button>
                        </div>
                    </li>
               
                )}
            </ul>
        </Fragment>
    );
}

export default UserList;