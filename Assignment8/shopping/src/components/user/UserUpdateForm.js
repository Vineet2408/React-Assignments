
import axios from 'axios';
import { useContext } from 'react';
import {useHistory} from 'react-router-dom';
import AuthContext from '../../store/auth-context';

const UserUpdateForm =(props)=>{

    const authCtx =  useContext(AuthContext);

    const token = authCtx.token;

    const history = useHistory();
    const submitForm =(event)=>{
        event.preventDefault();
        let user = {
            id:props.userId,
            email:event.target.elements.email.value,
            name:event.target.elements.name.value,
            age:event.target.elements.age.value,
            lastName:event.target.elements.lastName.value,
            contact:event.target.elements.contact.value,
            profilePic:event.target.elements.profilePic.value,
            token:token
            
        }
        axios.post(`http://localhost:8080/updateUser/${props.userId}`,user).then(res=>{
            let updatedUser = res.data.updatedUser;
            console.log(updatedUser);
            history.push(`/users`);
        });
    }

    const emailCheck =()=>{

    }

    return (
            <form  class="form-group container bg-dark text-white" onSubmit={submitForm}>
                <div class="row ">
                        <div class="col-md-10 offset-md-1">
                            <label for="name" ><strong>Name</strong></label>
                            <input class="form-control" id="name" onChange={emailCheck} type="text" name="name" placeholder="enter your name" required></input> 
                            <label id="nameMessage"></label>
                        </div>
                </div>

                <div class="row">
                    <div class="col-md-10 offset-md-1">
                            <label for="email"><strong>Email</strong></label>
                            <input class="form-control"  type="email" name="email" placeholder="email" id="email"></input>
                            <label id='emailMessage'></label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-10 offset-md-1">
                            <label for="age"><strong>Age</strong></label>
                            <input class="form-control"  type="number" name="age" placeholder="age" id="age"></input>
                            <label id='ageMessage'></label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-10 offset-md-1">
                            <label for="contact"><strong>Contact</strong></label>
                            <input class="form-control"  type="number" name="contact" placeholder="contact" id="contact"></input>
                            <label id='contactMessage'></label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-10 offset-md-1">
                            <label for="lastName"><strong>Last Name</strong></label>
                            <input class="form-control"  type="text" name="lastName" placeholder="Last Name" id="lastName"></input>
                            <label id='passwordMessage'></label>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-10 offset-md-1">
                            <label for="profilePic"><strong>Profile Pic Url</strong></label>
                            <input class="form-control"  type="text" name="profilePic" placeholder="Profile Pic Url" id="profilePic"></input>
                            <button onClick='' className='btn btn-warning'>Preview {'->'}</button>
                    </div>
                </div>
                

                <div class="row ">
                        <div class="col-md-4 offset-md-5">
                            <button  class="btn btn-success" >Update</button>
                        </div>
                </div>
                    
            </form>
    );
}
export default UserUpdateForm;