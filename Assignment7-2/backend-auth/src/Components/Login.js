import { Component } from "react";
import axios from 'axios';
import {useRef,useState} from 'react';
class Login extends Component
{

    constructor()
    {
        super();

        this.submitForm = this.submitForm.bind(this);
    }

   

    submitForm(event)
    {
        event.preventDefault();
        
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
       
        if(email && password)
        {
            axios.post('http://localhost:8080/login',  {
                email:email,
                password:password
            })
            .then(res=>{
                console.log('res = ',res.data);
                if(res.data.message)
                {
                    this.props.history.push('/user');
                }
            })
            .catch(err=>{
                console.log(err);
            });
        }
        else{
            alert('fields are empty');
        }
    }

     render()
    {

        return (
            <form  class="form-group container bg-dark text-white component" onSubmit={this.submitForm}>
                <div class="row ">
                        <div class="col-md-10 offset-md-1">
                            <label for="email" ><strong>Email</strong></label>
                            <input class="form-control" id="emailInput" onChange='' type="email" name="email" placeholder="enter your email" required></input> 
                            <label id="emailMessage"></label>
                        </div>
                </div>

                <div class="row">
                    <div class="col-md-10 offset-md-1">
                            <label for="password"><strong>Password</strong></label>
                            <input class="form-control" onFocus={this.check} onBlur={this.check} type="password" name="password" placeholder="password" id="password" min="5" required></input>
                            <label id='passwordMessage'></label>
                    </div>
                </div>

                <div class="row ">
                        <div class="col-md-4 offset-md-4">
                            <button  class="btn btn-success" >Login</button>
                        </div>
                </div>
                    
            </form>

        );
    }
}


export default Login;
