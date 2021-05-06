
function  ProfileDetail(props)
{
    console.log('props = ',props);
    let user = props.users[props.index];
 
    console.log('inside Profile details user = ',user);
    return (
        <div class=" container bg-dark text-white component" id="display">
            
            <div className="row ">
                <div className="col-md-7 offset-md-2">
                    <label for="name" >Name</label>
                    <p id="name" name="name">{user.name} {user.lastName}</p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-7 offset-md-2">
                    <label for="email" >Email</label>
                    <p name="email" id='email'>{user.email}</p>
                </div>
            </div>
            <div className="row ">
                <div className="col-md-7 offset-md-2">
                    <label for="age">Age</label>
                    <p id="age" name="age">{(user.age===0)?'':user.age}</p>
                </div>
            </div>
            <div className="row ">
                <div className="col-md-7 offset-md-2">
                    <label for="contact">Contact</label>
                    <p name="contact" id="contact">{user.contact}</p>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    
                </div>
            </div>
            
        </div>
        
    );
}
export default ProfileDetail;