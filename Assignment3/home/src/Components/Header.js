import React from 'react';
import { Component } from 'react';
class Header extends Component
{
    render()
    {
        return (
            <div className="header bg-dark"> 
            <span className="header-brand">
                <img className="logo" alt="logo-pic" src="https://www.clipartkey.com/mpngs/m/284-2846769_source-code-icon-transparent-png-coding-logos.png"/>
            </span>
            
            <span className= "bg-profile">
                <img className= "profile-image" alt="profile-pic" src="https://www.logolynx.com/images/logolynx/97/97e88682fa82ed11f3bf96dcf8479635.png"/>
            </span>
        </div>
           
        );
    }
}
export default Header;