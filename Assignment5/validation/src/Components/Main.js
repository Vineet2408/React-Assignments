import React, { Component } from 'react';
import Header from './Header';
import ProfileDetail from './ProfileDetail';
import Login from './Login';
import {Route} from 'react-router-dom';
class Main extends Component
{

    constructor()
    {
        super();
        this.user={
            name:'',
            age:0,
            contact:'',
            email:'',
            password:''
        };
        this.state = {
            users: [
                
                {
                    name:'abc',
                    age:12,
                    contact:'9393939312',
                    email:'abc@gmail.com',
                    password:'abc12'
                },
                {
                    name:'def',
                    age:21,
                    contact:'9393939321',
                    email:'def@gmail.com',
                    password:'def21'
                },
                {
                    name:'vbn',
                    age:34,
                    contact:'9393939334',
                    email:'vbn@gmail.com',
                    password:'vbn34'
                },
                {
                    name:'jkl',
                    age:43,
                    contact:'9393939343',
                    email:'jkl@gmail.com',
                    password:'jkl43'
                }
            ],
        };
        this.onLogin = this.onLogin.bind(this);
    }

    onLogin(userDetails,history)
    {
        const email=userDetails.email;
        const password = userDetails.password;
        const user = this.state.users.find((user)=>{
            if((user.email===email)&&(user.password===password))
            {
                return true;
            }
            return false;
        });
        if(user)
        {
            console.log('inside onLogin user.name = ',user.name);
            console.log('inside onLogin user.email = ',user.email);
            this.user=user;
            console.log('inside onLogin this.user = ',this.user);
            history.push('/login');
        }
        else
        {
            alert("Invalid credentials");
        }
    }

    logout(s)
    {
        if(s==='logout')
        this.user={
            name:'',
            age:0,
            contact:'',
            email:'',
            password:''
        };
    }
    render()
    {
        return (
            <div>
                <Header/>
                <div class='container-fluid'>
                    
                    <div class='row justify-content-center'>
                        <Route exact path='/' render={({history})=>(
                            <div class='col-5'>
                                <Login onLogin={(userDetails)=>{
                                    console.log('inside login tag = ',userDetails);
                                    this.onLogin(userDetails,history);
                                    
                                }}></Login>
                            </div>
                        )}/>
                        
                        <Route path='/login' render={({history})=>(
                            <div class='col-5'>
                                <ProfileDetail onLogout={(s)=>{
                                    console.log('logout details s = ',s);
                                    this.logout(s);
                                    history.push('/');
                                }} user={this.user}></ProfileDetail>
                            </div>
                        )} />
 
                    </div>

                </div>
            </div>
        );
    }
}
export default Main;