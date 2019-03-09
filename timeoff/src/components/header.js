import React, {Component} from 'react';
class Header extends Component {
    render(){
        return(
            <header> 
            <h1>Time-Off GLOW Management App</h1>
                <p>This is a simple employee absence management app which allows GLOW employees 
                request for leave and get immediate reply.</p>
                   
                    <img src ='./assets/employ.jpg'  alt = "Employee"/>

                    
            </header>
        );
    }
}

export default Header;