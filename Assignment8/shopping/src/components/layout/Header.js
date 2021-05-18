import Menu from './Menu';


const Header =(props)=>{

    
    return (
        
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <span ><img alt='logo' className="logo" src='https://raw.githubusercontent.com/Vineet2408/React-Images/main/logo.jpeg'/></span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <Menu />
                    </div>
                </div>
               
            </nav>
      
    );
        
}
export default Header;