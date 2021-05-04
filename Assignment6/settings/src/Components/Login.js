import { Component } from "react";

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
        const userDetails = {
            email:email,
            password:password
        }
        if(email && password)
        {
            console.log('inside if submit form ',userDetails);
            this.props.onLogin(userDetails);
        }
        else{
            alert('fields are empty');
        }
    }
     render()
    {
        return (
            <form  class="form-group container bg-dark text-white" onSubmit={this.submitForm}>
                <div class="row ">
                        <div class="col-md-10 offset-md-1">
                            <label for="email" ><strong>Email</strong></label>
                            <input class="form-control" type="email" name="email" placeholder="enter your email" id="email" required></input> 
                        </div>
                </div>

                <div class="row">
                    <div class="col-md-10 offset-md-1">
                            <label for="password"><strong>Password</strong></label>
                            <input class="form-control" type="password" name="password" placeholder="password" id="password" min="5" required></input>
                    </div>
                </div>

                <div class="row ">
                        <div class="col-md-4 offset-md-4">
                            <button  class="btn-primary" >Login</button>
                        </div>
                </div>
                    
            </form>

        );
    }
}


export default Login;
