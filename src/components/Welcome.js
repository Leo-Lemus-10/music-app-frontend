import React from 'react'
import { Link } from 'react-router-dom'


const Welcome = props => {
    return (
        <div className="welcome">
            <div className= "top-bar">
                <h1 className= "title">Rapify</h1>                    
            </div>
            <div className="welcome-body">
                <div className="welcome-inner">
                    <h3 className= "welcome-message">Welcome!</h3>
                    <h5 className= "homepage-prompt">Please Login or Signup to Continue</h5>
                    <div className= "homepage-btns">
                        <Link to= "/login">
                            <button className= "button">Login</button>
                        </Link>
                        <Link to= "/signup">
                            <button className= "button">Sign Up</button>
                        </Link>
                    </div>
                </div>
                
            </div>


            
        </div>
    )
}


export default Welcome