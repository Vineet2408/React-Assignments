import { Link } from 'react-router-dom';
import React, { Fragment, useContext } from 'react';
import {Route} from 'react-router-dom';
import AuthContext from '../../store/auth-context';


const User = (props) => {
    let user = props.user;
    console.log('user = ', user);

    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    const role = authCtx.role;
    const isAdmin = (role === 'admin') ? true : false;

    if (!user.name) {
        return <h1> No User Found !!! </h1>
    }
    return (
        <Fragment>
            
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-2'>
                    <Route path="/users">
                        <img classname='profilePic'
                                alt='profile-pic' src={user.profilePic}
                                width="80" height="80" 
                            />
                    </Route>
                    <Route path = "/user/:userId">
                        <img classname='profilePic'
                                alt='profile-pic' src={user.profilePic}
                                width="120" height="120" 
                        />
                    </Route>
                    <Route path="/profile/:userId">
                        <img classname='profilePic'
                            alt='profile-pic' src={user.profilePic}
                            width="150" height="150" 
                            style={{
                                border: "2px solid aqua",
                                borderRadius :"2"
                        }}
                        />
                    </Route>
                    
                </div>
                <div className='col-md-7'>
                    <div className='row'>
                        <strong class='user-title'>{user.name} {user.lastName}</strong>
                        <hr></hr>
                    </div>
                    <div className="row">
                        <i><strong>Email : </strong>{user.email}</i>
                        <hr></hr>
                    </div>
                </div>
                {
                    isAdmin && (
                        <Route path={"/profile/:userId"}>
                <div className="row">
                        <strong>Contact : {user.contact}</strong>
                </div>
                <hr></hr>
                <div className="row">
                        <strong>Age : {user.age}</strong>
                </div>
                <hr></hr>
                </Route>
                    )}
                <div className='col-md-3'>
                    {
                        isLoggedIn && isAdmin && (
                            <Link className="btn btn-success" to={`/update/${user.id}`}>Update user</Link>
                        )
                    }
                </div>

            </div>
        </div>
        </Fragment>
    );
}

export default User;