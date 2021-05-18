import React from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {useContext} from 'react';
import AuthContext from '../../store/auth-context';

const AddUser = (props) => {

    const history = useHistory();
    const context = useContext(AuthContext);

    
 
    const submitForm=(event)=>{
        event.preventDefault();
        const token = context.token;
        let newUser = {
            
            email:event.target.elements.email.value,
            name:event.target.elements.name.value,
            age:+(event.target.elements.age.value),
            lastName:event.target.elements.lastName.value,
            contact:(+event.target.elements.contact.value),
            profilePic:event.target.elements.profilePic.value,
            password:event.target.elements.password.value,
            token:token
        }

        axios.post('http://localhost:8080/addUser',newUser)
        .then(result=>{
            console.log('user add message = ',result.data.message);
            if(result.data.message === 'user added successfully')
            {
                history.push(`/user/${result.data.user.id}`);
            }
            console.log('error = = =',result.data.error);

        })
        .catch(err=>{
            console.log('user add error = ',err)
        });
       
    }


    return (
        <div className="container-fluid ">
        
             <form className='form-group container text-white bg-success' onSubmit={submitForm}>
                <div className="row justify-content-center">
                    <div className="col-6">
                    <input className="form-control" type="text" placeholder='enter name' name="name"></input>
                    </div>
                    <div className="col-6">
                    <input className="form-control" type="text" placeholder='enter Last Name' name="lastName"></input>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className='col-12'>
                        <input className="form-control" type="email" placeholder='enter email' name="email"></input>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-6">
                        <input className="form-control"  type="number" placeholder='enter age' name="age"></input>
                    </div>
                    <div className='col-6'>
                        <input className="form-control" type="number" placeholder='enter contact' name="contact"></input>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div className='col-12'>
                        <input className="form-control" type="text" placeholder='enter profilePic Url' name="profilePic"></input>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className='col-12'>
                        <input className="form-control" type="text" placeholder='enter password' name="password"></input>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-3">
                    <button className="btn btn-warning mt-2 mb-2" type='submit'>Add User</button>

                    </div>
                </div>
            </form>
            
        </div>
    );
}

export default AddUser;
