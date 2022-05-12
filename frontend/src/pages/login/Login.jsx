import './login.css'
import React, { useState } from 'react'
import { Button, Typography } from '@material-ui/core'
import Register from '../register/Register'
import { useNavigate } from 'react-router-dom'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'



export default function Login(props) {
    const [disabled, cDisabled] = useState(false)
    const [needToRegister, cNeedToRegister] = useState(false)
    const navigate = useNavigate()
    toastr.options = {
        "closeButton": false,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-center",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }

    const submitHandler = (e) => {
        e.preventDefault()
        cDisabled(true)
        props.client
        .login(e.target.username.value, e.target.password.value)
        .then((response) => {
            cDisabled(true)           
            props.loggedIn()
            navigate('/')
            toastr["success"]("You are now logged in and can access your permitted features.", "Login Successfully")            
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
                <div className='form' onSubmit={submitHandler} autoComplete="off" disabled={disabled}>
                    <form >
                        <label htmlFor="Email"></label>
                        <input className='loginInput' name="username" type="text" placeholder='Username' disabled={disabled} />
                        <label htmlFor='password'></label>
                        <input className='loginInput' name="password" type="password" placeholder='Password' disabled={disabled} />
                        <div className= 'loginButtonContainer'>
                             <button className='loginButton' disabled={disabled} type="submit">Login</button>
                        </div>
                    </form>   <br/>   
                    <br/> <hr/>  
                    <hr/>        
                </div>
                <Typography className='Register'>
                        Don't have an account yet?
                        <br />
                        <Button onClick={renderRegister} variant="contained" disabled={disabled} color="primary" size="small" >Create Account</Button>
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
