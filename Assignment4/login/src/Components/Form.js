
function Login(props)
{
    return (

       
            <div class="form-group container bg-dark text-white">
            <div class="row ">
                    <div class="col-md-7 offset-md-2">
                        <label for="name" >Name</label>
                        <input class="form-control" type="text" name="name" placeholder="enter your name" id="name"></input> 
                    </div>
                </div>

            <div class="row">
                <div class="col-md-7 offset-md-2">
                        <label for="password">Password</label>
                        <input class="form-control" type="password" name="password" placeholder="password" id="password"></input>
                </div>
                </div>
                <div class="row ">
                    <div class="col-md-5 offset-md-2">
                        <button  class="btn-primary" 
                            onClick={()=>{
                                props.onDisplay((document.getElementById('name').value),
                                document.getElementById('password').value)}
                            }
                        >
                        Display
                        </button>
                    </div>
                </div>
                
            </div>
        
    );
}

export default Login;