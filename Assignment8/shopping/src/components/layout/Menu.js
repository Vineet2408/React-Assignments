import React from 'react';
import {Switch,Route,Link,useHistory} from 'react-router-dom';
import {useContext} from 'react';
import AuthContext from '../../store/auth-context';


const Menu = () => {

    const authCtx = useContext(AuthContext);
    
    const isLoggedIn = authCtx.isLoggedIn;
    const role = authCtx.role;
    

    const isAdmin = (role==='admin')?true:false
    const userId = authCtx.userId;

    const history = useHistory();

    const logoutHandler = (event)=>{
        authCtx.logout();
        history.replace('/logout');
    }

    return (
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <Switch>
            <Route exact path='/'>
                {!isLoggedIn && (
                    <li className="nav-item"><Link className="nav-link" to='/login'>Login</Link></li>
                )}
            </Route>

            <Route path='/users'>
                    {
                        isLoggedIn && isAdmin && (
                            <li className="nav-item"><Link className="nav-link" to='/addUser'>Add User</Link></li>
                            )

                            && (
                                <li className="nav-item"><button className="nav-link btn btn-danger" onClick={logoutHandler}>Logout</button></li>
                            )
                            && (
                                <li className="nav-item"><Link className="nav-link" to='/products'>Products</Link></li>
                            )
                    }
                    {
                        isLoggedIn && (
                            <li className="nav-item"><Link className="nav-link" to='/products'>Products</Link></li>
                        )
                        && (
                            <li className="nav-item"><button className="nav-link btn btn-danger" onClick={logoutHandler}>Logout</button></li>
                        )
                    }
            </Route>
            <Route path='/products'>
                {
                     (!isAdmin) && (
                        <li className="nav-item">
                            <Link className="nav-link" to={`/profile/${userId}`}>
                                <span className="material-icons-outlined">
                                    person
                                </span>
                            </Link>
                        </li>
                    )
                }
                {
                     isAdmin && (
                        <li className="nav-item"><Link className="nav-link" to='/users'>All Users</Link></li>      
                        ) 
                       
                }
                {
                    isLoggedIn && (
                        <li className="nav-item">
                            <button className="nav-link btn btn-danger" 
                            onClick={logoutHandler}>Logout</button>
                        </li>
                    )
                }
            </Route>
           
            <Route path='/user/:userId'>
                {
                   isLoggedIn &&  isAdmin && (
                            <li className="nav-item"><Link className="nav-link" to='/users'>All Users</Link></li>      
                    ) && (
                            <li className="nav-item"><button className="nav-link btn btn-danger" onClick={logoutHandler}>Logout</button></li>
                    )
                    && (
                        <li className="nav-item"><Link className="nav-link" to='/products'>Products</Link></li>
                    )
                }
            </Route>
            <Route path='/'>
                <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li> 
            </Route>
        </Switch>
    </ul>
    );
}

export default Menu;
