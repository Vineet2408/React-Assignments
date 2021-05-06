import {Route} from 'react-router-dom';
function Header(props)
{
    const logoutUser={
        name:'',
        age:0,
        contact:'',
        email:'',
        password:'',
        profilePic:'https://www.logolynx.com/images/logolynx/97/97e88682fa82ed11f3bf96dcf8479635.png'
    }
    console.log('props index',props.index);
    console.log('props users ',props.users);
    let user = (props.index===-1)?logoutUser:props.users[props.index];
    return (
        <header>
            <nav className="container-fluid bg-dark text-white">
        
                <div className="row header-row">

                    <div className="col-1 order-first">
                        <div className='row profile-row'>
                            <span className= "bg-profile">
                                <img className= "profile-image" 
                                    alt="profile-pic" 
                                    src={user.profilePic}/>
                            </span>
                        </div>
                        <div className='row profile-row'>
                            <label class="navbar-brand">{(user.name==='')?'Assignment':user.name}</label>
                        </div>
                    </div>
                    
                    <div className='col-8 offset-md-1'>
                        
                    </div>
                    <div className='col-2 order-last'>
                        <Route path='/user' render ={()=>(
                            <div>
                                    <button className='btn btn-primary header-btn nav-link update-btn' 
                                    onClick={()=>{
                                       props.history.push('/update');
                                    }}>
                                        Update
                                    </button>
                                    
                                    <button onClick={()=>{
                                    user=logoutUser;
                                    
                                    props.history.push('/login');
                        
                                    }} 
                                    className='btn btn-danger header-btn nav-link logout-btn'>Logout</button>
                            </div>
                        )}/>
                        <Route path='/login' render={()=>(
                            <div><a className='btn btn-primary header-btn' href='/register'>Register</a></div>
                        )}/>
                        <Route exact path='/' render={()=>(
                            
                                <a href='/login' class='btn btn-primary header-btn'>login</a>
                            
                        )}/>
                    </div>
                
                </div>
                
            </nav>
        </header>
    );
}

export default Header;