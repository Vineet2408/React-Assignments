import React, { Component } from 'react';
import Header from './Header';
import ProfileDetail from './ProfileDetail';
import Login from './Login';
import {Route} from 'react-router-dom';
import Home from './Home'
import UpdateUser from './updateUser'
class Main extends Component
{

    constructor()
    {
       super();
        this.userIndex=-1;
       this.onLogin = this.onLogin.bind(this);
       this.logout  = this.logout.bind(this);
       
    }

    
    onLogin(userDetails,history)
    {
        const email=userDetails.email;
        const password = userDetails.password;
        const index = this.props.users.findIndex((u)=>{
            if((u.email===email)&&(u.password===password))
            {
                console.log('user matched successfully');
                return true;
            }
            return false;
        });
        let user=this.props.users[index] 
        if(user)
        {
            console.log('inside if user exits onLogin user.name = ',user.name);
            console.log('inside if user exits onLogin user.email = ',user.email);
            this.userIndex=index;
            console.log('inside if user exits onLogin this.user = ',this.user);
            console.log('history = ',history);
            history.push('/user');
        }
        else
        {
            alert("Invalid credentials");
        }
    }

    logout(s)
    {
        console.log('in logout function inside Main Component, s = ',s)
        if(s==='logout')
       {
           this.index=-1;
       }
       
    }
    render()
    {
        return (
                
                <div>
                        <Route exact path='/' render={()=>(
                            <div>
                                <Header {...this.props} index={this.userIndex}/>
                                <Home></Home>
                            </div>
                        )}/>
                      

                        <Route path='/login' render={({history})=>(
                            <div className='container-fluid'>
                                <Header {...this.props} index={this.userIndex}/>

                                <div className='container'>
                                    <div className='row justify-content-center'>
                                        <div className='col-5'>

                                            <Login onLogin={(userDetails)=>{
                                                console.log('inside login tag userdetails = ',userDetails);
                                                this.onLogin(userDetails,history);
                                            
                                            }} {...this.props} index={this.userIndex}>
                                            </Login>
                                        </div>
                                    </div>              
                                </div>
                            </div>
                        )}/>

                        <Route path='/user' render={({history})=>(
                            <div className='container-fluid'>
                                <Header  {...this.props} index={this.userIndex}/>

                                <div className='container'>
                                    <div className='row justify-content-center'>
                                        <div className='col-5'>
                                            <ProfileDetail 
                                                {...this.props} index={this.userIndex}>
                                            </ProfileDetail>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        )} />

                        <Route path='/update' render = {({history})=>(
                            
                                <div className='container-fluid'>
                                    <Header  {...this.props} index={this.userIndex}/>
                                    <div className='container'>
                                    <div className='row justify-content-center'>
                                        <div className='col-5'>
                                            < UpdateUser {...this.props} index={this.userIndex} 
                                           
                                                >

                                                </UpdateUser>
                                        </div>
                                    </div>
                                    
                                </div>
                                </div>
                            
                        )}/>
                </div>

        );
    }
}
export default Main;