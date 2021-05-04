
function  ProfileDetail(props)
{
    let user = props.user;
    const logoutUser={
        name:'',
        age:0,
        contact:'',
        email:'',
        password:''
    }
    console.log('inside Profile details user = ',props.user);
    return (
        <div class=" container bg-dark text-white" id="display">
            
            <div class="row ">
                <div class="col-md-7 offset-md-2">
                    <label for="name" >Name</label>
                    <p id="name" name="name">{user.name}</p>
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
                    <label for="age"></label>
                    <p id="age" name="age">{(user.age===0)?'':props.user.age}</p>
                </div>
            </div>
            <div class="row ">
                <div class="col-md-7 offset-md-2">
                    <label for="contact"></label>
                    <p name="contact" id="contact">{user.contact}</p>
                </div>
            </div>
            <div class='row'>
                <div class='col'>
                    <button onClick={()=>{
                        user=logoutUser;
                        props.onLogout('logout');
                        
                    }}>Logout</button>
                </div>
            </div>
            
        </div>
        
    );
}
export default ProfileDetail;