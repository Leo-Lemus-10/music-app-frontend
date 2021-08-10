import React, { useState } from 'react'
import { useHistory } from 'react-router';


const SignUpPage = props => {

    let [name, setName] = useState("")
    let [password, setPassword] = useState("")
    let [pic, setPic] = useState("")
    let history = useHistory()

    const signUp= (e) => {
        e.preventDefault()
        let userObj = {
            username: name,
            password: password,
            profile_pic: pic
        }
        let postConfig = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userObj),
        }
        fetch("http://localhost:3000/users", postConfig)
            .then(r => r.json())
            .then(dbObject => {
                props.selectUser(dbObject)
                history.push('/menu')
            })

    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handlePassChange = (event) => {
        setPassword(event.target.value)
    }

    const handlePicChange = (event) => {
        setPic(event.target.value)
    }


    return (
        <div>
            <form onSubmit= {signUp}>
                <input type="text" value= {name} onChange={handleNameChange} name= "loginInput"></input>
                <input type="text" value= {pic} onChange={handlePicChange} name= "picInput"></input>
                <input type="password" value= {password} onChange={handlePassChange} name= "passInput"></input>
                <input type= "submit" value= "Submit"></input>
            </form>
        </div>
    )
}



export default SignUpPage
