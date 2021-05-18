import React,{useContext,useEffect,useState} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import AuthContext from '../store/auth-context';

const Login =(props)=>{

    const history = useHistory();

    const authCtx = useContext(AuthContext);

    const [cred,setCred] = useState({});

    useEffect(()=>{
        let email = cred.email;
        let password = cred.password;
        axios.post(`http://localhost:8080/login`,{email:email,password:password})
        .then(res=>{
            console.log(res.data);
            const mesg = res.data.message;
            
            if(mesg === 'login successful')
            {
                return res.data;
            }
            else
            {
                throw new Error('Invalid Credentials');
            }
        })
        .then(data=>{
            console.log(data);
            authCtx.login(data.token);
            authCtx.setRole(data.role);
            authCtx.setUserId(data.userId);
            if(data.role === 'admin')
            {
                history.replace('/users');
            }
            else if(data.role === 'user')
            {
                history.replace('/products');
            }
        })
        .catch(err=>{
            alert('alert error = ' +err.message);
        });
    },[cred])
 
    const submitForm = (event)=>{
        event.preventDefault();
        const email = event.target.elements.email.value;
        const password = event.target.elements.password.value;
        setCred({email:email,password:password});
    }

    const emailCheck=()=>{

    }
    return (
        <form  className="form-group container bg-dark text-white" onSubmit={submitForm}>
                <div className="row ">
                        <div class="col-md-10 offset-md-1">
                            <label htmlFor="email" ><strong>Email</strong></label>
                            <input className="form-control" id="emailInput" onChange={emailCheck} type="email" name="email" placeholder="Enter your email" required></input> 
                            <label id="emailMessage"></label>
                        </div>
                </div>

                <div className="row">
                    <div className="col-md-10 offset-md-1">
                            <label htmlFor="password"><strong>Password</strong></label>
                            <input className="form-control"  type="password" name="password" placeholder="password" id="password" min="5" required></input>
                            <label id='passwordMessage'></label>
                    </div>
                </div>

                <div className="row ">
                        <div className="col-md-4 offset-md-5">
                            <button  className="btn btn-success" >Login</button>
                        </div>
                </div>
                    
            </form>
    );
}

export default Login;