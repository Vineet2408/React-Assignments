import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/layout/Layout';
import React, { Suspense, Fragment, useContext } from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import Products from './pages/Products';
import UpdateUser from './pages/UpdateUser'
import Users from './pages/Users';
import AddUser from './components/user/AddUser';
import AuthContext from './store/auth-context';
import Logout from './pages/Logout';
import ProductUpdateForm from './components/product/ProductUpdateForm';

const UserDetail = React.lazy(() => import('./pages/UserDetail'));

const App = (props) => {

    const authCtx = useContext(AuthContext);
    const isLoggedIn = authCtx.isLoggedIn;
    const role = authCtx.role;
    const isAdmin = (role === 'admin') ? true : false;
    return (
        <Layout>
            <Suspense fallback={<p>Loading...</p>}> 
                <Switch>
                    {
                        !isLoggedIn && (
                            <Route path='/login'>
                                <Login />
                            </Route>
                        )
                    }

                    {
                        isLoggedIn && isAdmin && (
                            <Fragment>
                                <Route exact path='/users'>
                                    <Users />
                                </Route>
                                <Route path='/update/:userId'>
                                    <UpdateUser />
                                </Route>
                                <Route path="/addUser">
                                    <AddUser />
                                </Route>
                                <Route path='/products'>
                                    <Products />
                                </Route>
                                <Route path='/updateProduct/:prodId'>
                                    <ProductUpdateForm></ProductUpdateForm>
                                </Route>
                                <Route path='/logout'>
                                    <Logout />
                                </Route>
                                <Route exact path='/'>
                                    <Redirect to='/users'></Redirect>
                                </Route>

                            </Fragment>
                        )
                    }

                    {
                        isLoggedIn && (
                            <Fragment>
                                <Route path='/user/:userId'>
                                    <UserDetail />
                                </Route>
                                <Route path='/profile/:userId'>
                                    <UserDetail />
                                </Route>
                                <Route path='/products'>
                                    <Products />
                                </Route>
                                <Route path='/logout'>
                                    <Logout />
                                </Route>
                                <Route exact path='/'>
                                    <Redirect to='/products'></Redirect>
                                </Route>
                            </Fragment>
                        )
                    }
                    <Route exact path='/'>
                        <Home />
                    </Route>
                </Switch>
            </Suspense>
        </Layout>
    );
}
export default App;