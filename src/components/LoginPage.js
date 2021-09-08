import React, { useState } from 'react'
import { useHistory } from 'react-router';
import { Grid, Paper, Avatar, TextField } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';




const LoginPage = (props) => {

    const paperStyle = {padding: 20, height: '70vh', width:280, margin: "20px auto"}
    const avatarStyle = {backgroundColor: '#ff5e5e'}
    
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
        // <div className="login-page-body">
        //     <form onSubmit= {login}>
        //         <input type="text" value= {name} onChange={handleNameChange} name= "loginInput"></input>
        //         <input type="password" value= {password} onChange={handlePassChange} name= "passInput"></input>
        //         <input type= "submit" value= "Submit"></input>
        //     </form>
        //     {badLogin ? <p>Username or Password is incorrect</p>: null}
        // </div>
        <Grid>
            <Paper elevations={10} style={paperStyle}>
            <Grid align='center'>
                <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                <h2>Login</h2>
            </Grid>
            <TextField label='Username' placeholder='Enter Username' fullWidth required/>
            <TextField label='Password' placeholder='Enter Password' type= 'password'fullWidth required/>
            </Paper>
        </Grid>
    )
}

export default LoginPage
