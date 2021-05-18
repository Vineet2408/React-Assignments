import React,{useState} from 'react';



const AuthContext = React.createContext({
    token:'',
    isLoggedIn:false,
    role:null,
    userId:null,
    setUserId:(userId)=>{},
    setRole:(role)=>{},
    login:(token)=>{},
    logout:()=>{}
});

export const AuthContextProvider = (props)=>{

    const initialToken = localStorage.getItem('token');
    const initialRole = localStorage.getItem('role');
    const initialUserId = localStorage.getItem('userId');
    const [token,setToken] = useState(initialToken);
    const [role,setRole] = useState(initialRole);
    const [userId,setUserId] = useState(initialUserId);

    const userIsLoggedIn = !!token;

    const loginHandler = (token)=>{
        setToken(token);
        localStorage.setItem('token',token);
        
    }
    const logoutHandler = ()=>{
        setToken(null);
        setRole(null);
        setUserId(null);
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        localStorage.removeItem('userId');
    }

    const setUserRole =(role)=>{
        setRole(role);
        localStorage.setItem('role',role);
    }

    const setUserIdHandler = (userId)=>{
        setUserId(userId);
        localStorage.setItem('userId',userId);
    }

    const contextValue = {
        token:token,
        isLoggedIn:userIsLoggedIn,
        role:role,
        userId:userId,
        setUserId:setUserIdHandler,
        setRole:setUserRole,
        login:loginHandler,
        logout:logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
};

export default AuthContext;
