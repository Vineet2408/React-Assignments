import { Component } from "react";

class Login extends Component
{
    constructor()
    {
        super();

        this.submitForm = this.submitForm.bind(this);
        this.emailCheck = this.emailCheck.bind(this);
    }

    emailCheck(event)
    {
      let email = event.target.value;
      let msg = document.getElementById('emailMessage');
      msg.style.color='red';
      if(email.length <5 || email.split("@").length <=1)
      {
          msg.style.display='block';
          msg.innerHTML = 'not a valid html'
      }
      else 
      {
        msg.style.display='none';
      }
    }

    submitForm(event)
    {
        event.preventDefault();
        console.log('target = ',event.target)
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
            <form  class="form-group container bg-dark text-white component" onSubmit={this.submitForm}>
                <div class="row ">
                        <div class="col-md-10 offset-md-1">
                            <label for="email" ><strong>Email</strong></label>
                            <input class="form-control" id="emailInput"  onBlur={this.emailCheck} type="email" name="email" placeholder="enter your email" required></input> 
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
