
function  ProfileDetail(props)
{
    let user = props.user;
 
    console.log('inside Profile details user = ',props.user);
    return (
        <div class=" container bg-dark text-white component" id="display">
            
            <div class="row ">
                <div class="col-md-7 offset-md-2">
                    <label for="name" >Name</label>
                    <p id="name" name="name">{user.name} {user.lastName}</p>
                </div>
            </div>

            <div class="row">
                <div class="col-md-7 offset-md-2">
                    <label for="email" >Email</label>
                    <p name="email" id='email'>{user.email}</p>
                </div>
            </div>
            <div class="row ">
                <div class="col-md-7 offset-md-2">
                    <label for="age">Age</label>
                    <p id="age" name="age">{(user.age===0)?'':props.user.age}</p>
                </div>
            </div>
            <div class="row ">
                <div class="col-md-7 offset-md-2">
                    <label for="contact">Contact</label>
                    <p name="contact" id="contact">{user.contact}</p>
                </div>
            </div>
            <div class='row'>
                <div class='col'>
                    
                </div>
            </div>
            
        </div>
        
    );
}
export default ProfileDetail;