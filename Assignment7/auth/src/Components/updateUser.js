import { Component } from "react";


class UpdateUser extends Component
{
    constructor()
    {
        super();
        this.submitForm = this.submitForm.bind(this);
        this.ageCheck = this.ageCheck.bind(this);
        this.contactCheck = this.contactCheck.bind(this);
    }

    submitForm(event)
    {
        let user = this.props.users[this.props.index];
        event.preventDefault();
        let updateUser = {
            name:       event.target.elements.name.value,
            lastName:   event.target.elements.lastName.value,
            email:      user.email,
            age:        event.target.elements.age.value,
            contact:    event.target.elements.contact.value,
            profilePic: user.profilePic
        }
        this.props.updateUser(this.props.index,updateUser,);
        this.props.history.push('/user');
    }

    contactCheck(event)
    {
        let con = event.target.value;
        let msg = document.getElementById('contactMsg');
        msg.style.color='red';
        if(con < 10)
        {
            msg.style.display='block';
            msg.innerHTML = ' cannot be less than 10 ';
        }
        else
        {
            msg.style.display='none';
            msg.innerHTML = ' ok ';
        }
    }

    ageCheck(event)
    {
        let age = event.target.value;
        let msg = document.getElementById('ageMsg');
        msg.style.color='red';
        if(age < 1)
        {
            msg.style.display='block';
            msg.innerHTML = 'age cannot be less than 1';
        }
        else {
            msg.style.display='none';
            msg.innerHTML = 'ok';
        }
    }

    render()
    {
        const user = this.props.users[this.props.index];
        return (
        <div> 
            <form className='form-group container bg-dark text-white' onSubmit={this.submitForm}>
                <div className='row'>
                    <label for='name'>Name</label>
                    <input type='text' className='form-control' name='name' placeholder={user.name}/>
                </div>

                <div className='row'>
                    <label for='name'>Last Name</label>
                    <input type='text' className='form-control' name='lastName' placeholder={user.lastName}/>
                </div>

                <div className='row'>
                    <label for='name'>Age</label>
                    <input type='text' onBlur={this.ageCheck} className='form-control' name='age' min='1' placeholder={user.age}/>
                    <label id="ageMsg"></label>
                </div>

                <div className='row'>
                    <label for='name'>Contact</label>
                    <input type='text' onChange={this.contactCheck} onBlur={this.contactCheck}className='form-control' name='contact' max='10' placeholder={user.contact}/>
                    <label id="contactMsg"></label>
                </div>

                <div className='row justify-content-center'>
                    <div className='col-3'>
                        <button className='btn btn-success'>Update</button>
                    </div>
                </div>
            </form>
        </div>
        );
    }
}
export default UpdateUser;