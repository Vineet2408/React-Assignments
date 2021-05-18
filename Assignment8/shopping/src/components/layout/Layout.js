import {Fragment} from 'react';
import Header from  './Header';

const Layout =(props)=>{
    return (
    <Fragment >
        <Header/>
        
        <div className="main" >
            {props.children}
        </div>
    </Fragment>);
}
export default Layout;