
function Header(props)
{
    return (
        <header>
            <nav class="container-fluid bg-dark text-white">
        
                <div class="row header-row">
                    <div class="col-md-1">
                        <span className= "bg-profile">
                            <img className= "profile-image" alt="profile-pic" src="https://www.logolynx.com/images/logolynx/97/97e88682fa82ed11f3bf96dcf8479635.png"/>
                        </span>
                        <label class="navbar-brand">Assignment</label>
                    </div>
                    <div class='col-md-10'>

                    </div>
                    <div class='col-md-1 nav-btn'>
                        <button class="update-btn btn-primary">Update</button>
                    </div>
                
                </div>
                
            </nav>
        </header>
    );
}

export default Header;