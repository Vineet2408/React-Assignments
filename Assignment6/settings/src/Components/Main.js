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
        this.user={
            name:'',
            age:0,
            contact:'',
            email:'',
            password:'',
            profilePic:'https://www.logolynx.com/images/logolynx/97/97e88682fa82ed11f3bf96dcf8479635.png'
        };
        this.state = {
            users: [
                
                {
                    name:'Elon',
                    age:49,
                    lastName:'Musk',
                    contact:'9393939312',
                    email:'abc@gmail.com',
                    password:'abc12',
                    profilePic:'https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg'
                },
                {
                    name:'Ratan',
                    age:83,
                    lastName:'Tata',
                    contact:'9393939321',
                    email:'def@gmail.com',
                    password:'def21',
                    profilePic:'https://www.dreshare.com/wp-content/uploads/2020/01/Ratan-Tata.jpg'
                },
                {
                    name:'Mukesh',
                    age:34,
                    contact:'9393939334',
                    lastName:'Ambani',
                    email:'vbn@gmail.com',
                    password:'vbn34',
                    profilePic:'https://www.celebrityborn.com/admin/assets/images/people/flbKIKCx6OE0eLgYBukz_2016_11_21.jpg'
                },
                {
                    name:'Pikachu',
                    age:43,
                    contact:'9393939343',
                    lastName:'catchem',
                    email:'jkl@gmail.com',
                    password:'jkl43',
                    profilePic:'https://i.ytimg.com/vi/1roy4o4tqQM/maxresdefault.jpg'
                }
            ],
        };
        this.onLogin = this.onLogin.bind(this);
        this.update = this.update.bind(this);
        this.toUpdate = this.toUpdate.bind(this);

    }

    update(updateUser,history)
    {
        let index = this.state.users.findIndex((user)=>{
            if(user.email===updateUser.email)
            {
                return true;
            }
            return false;
        });
        this.state.users[index]=updateUser;
        this.user=updateUser;
        console.log('updated index =',this.state.users[index] );
        history.push('/user');
    }

    toUpdate(user,history)
    {
        history.push('/update');
    }
    onLogin(userDetails,history)
    {
        const email=userDetails.email;
        const password = userDetails.password;
        const user = this.state.users.find((user)=>{
            if((user.email===email)&&(user.password===password))
            {
                console.log('user matched successfully');
                return true;
            }
            return false;
        });
        if(user)
        {
            console.log('inside if user exits onLogin user.name = ',user.name);
            console.log('inside if user exits onLogin user.email = ',user.email);
            this.user=user;
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
        this.user={
            name:'',
            age:0,
            contact:'',
            email:'',
            password:'',
            profilePic:'https://www.logolynx.com/images/logolynx/97/97e88682fa82ed11f3bf96dcf8479635.png'

        };
    }
    render()
    {
        return (
                
                <div>
                        <Route exact path='/' render={()=>(
                            <div>
                                <Header user={this.user}/>
                                <Home></Home>
                            </div>
                        )}/>
                      

                        <Route path='/login' render={({history})=>(
                            <div className='container-fluid'>
                                <Header user={this.user}/>
                                <div className='container'>
                                    <div className='row justify-content-center'>
                                        <div className='col-5'>
                                            <Login onLogin={(userDetails)=>{
                                                console.log('inside login tag userdetails = ',userDetails);
                                                this.onLogin(userDetails,history);
                                            
                                            }}>
                                            </Login>
                                        </div>
                                    </div>
                                    
                                    
                                </div>
                            </div>
                        
                        )}/>

                        <Route path='/user' render={({history})=>(
                            <div className='container-fluid'>
                                <Header 
                                    user={this.user} 
                                    onLogout={(s)=>{
                                                console.log('logout details s = ',s);
                                                this.logout(s);
                                                history.push('/');
                                            }} 
                                    toUpdate={(userTobeUpdate)=>{
                                        this.toUpdate(userTobeUpdate,history);
                                        this.user=userTobeUpdate;
                                    }}
                                            />
                                <div className='container'>
                                    <div className='row justify-content-center'>
                                        <div className='col-5'>
                                            <ProfileDetail 
                                                user={this.user}>
                                            </ProfileDetail>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        )} />

                        <Route path='/update' render = {({history})=>(
                            
                                <div className='container-fluid'>
                                    <Header user={this.user} onLogout={(s)=>{
                                                    console.log('logout details s = ',s);
                                                    this.logout(s);
                                                    history.push('/');
                                                }} />
                                    <div className='container'>
                                    <div className='row justify-content-center'>
                                        <div className='col-5'>
                                            < UpdateUser
                                                user={this.user} onUpdate={(user)=>{
                                                    console.log('in UpdateUser tag updated user received',user)
                                                    this.update(user,history);
                                                }}>
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