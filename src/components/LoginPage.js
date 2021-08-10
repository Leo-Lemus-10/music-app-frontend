import React, { useState } from 'react'
import { useHistory } from 'react-router';



const LoginPage = (props) => {
    
    let [badLogin, setBadLogin] = useState(false)
    let [name, setName] = useState("")
    let [password, setPassword] = useState("")

    let history = useHistory()


    const checkIfUserExists = () => {
        let userObj = {
            username: name,
            password: password
        }
        let postConfig = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userObj),
        }

        fetch("http://localhost:3000/login", postConfig)
            .then(r => r.json())
            .then(dbObject => {
                if (dbObject.username !== undefined) {
                    props.selectUser(dbObject)
                    history.push('/menu')
                } 
                else {
                    setBadLogin(true)
                    setTimeout(() => setBadLogin(false), 3000)
                }
            })



    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handlePassChange = (event) => {
        setPassword(event.target.value)
    }

    const login = (e) => {
        e.preventDefault()
        checkIfUserExists()  
    }

    return (
        <div className="login-page-body">
            <form onSubmit= {login}>
                <input type="text" value= {name} onChange={handleNameChange} name= "loginInput"></input>
                <input type="password" value= {password} onChange={handlePassChange} name= "passInput"></input>
                <input type= "submit" value= "Submit"></input>
            </form>
            {badLogin ? <p>Username or Password is incorrect</p>: null}
        </div>
    )
}



export default LoginPage
