import './login.css'
import React, { useState } from 'react'
import { Button, Typography } from '@material-ui/core'
import Register from '../register/Register'


export default function Login(props) {
    const [disabled, cDisabled] = useState(false)
    const [needToRegister, cNeedToRegister] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
        cDisabled(true)
        props.client
        .login(e.target.username.value, e.target.password.value)
        .then((response) => {
            cDisabled(true)           
            props.loggedIn()           
            // toastr notif or equiv
        })        
        .catch(() => {
            cDisabled(false)
            // toastr/equiv
        })
    }
    
    const renderRegister = () => {
        cNeedToRegister(true)
    }

    const renderLogin = () => {
        cNeedToRegister(false)
    }

    return (

        <div className='loginPage'>
            {!needToRegister ? (
                <div className='loginPageText'>
                <div>
                <h1> Welcome to the page</h1>
                <p>Here you can login or create a username to login to the blog page.</p>
                </div>
                <div className='form' onSubmit={submitHandler} autocomplete="off" disabled={disabled}>
                    <form >
                        <label htmlFor="Email"></label>
                        <input className='loginInput' name="username" type="text" placeholder='Username' disabled={disabled} />
                        <label htmlFor='password'></label>
                        <input className='loginInput' name="password" type="password" placeholder='Password' disabled={disabled} />
                        <button className='loginButton' disabled={disabled} type="submit">Login</button>
                    </form>               
                </div>
                <Typography variant="h8">
                        Don't have an account yet?
                        <br />
                        <Button onClick={renderRegister} variant="contained" disabled={disabled} color="primary" size="small" >Register</Button>
                    </Typography>                
                </div>
            ) : (
                <div>
                    <Register client={props.client} renderLogin={renderLogin}/>
                </div>
            )}
            {/* <div className='rightbar'></div>              
            
            <div className='leftbar'></div> */}

        </div>
        
    )
}
