import './register.css'
import Login from '../login/Login'
import React, { useState } from 'react'
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'


export default function Register(props) {
    const [disabled, cDisabled] = useState(false)
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
        .register(e.target.displayName.value, e.target.username.value, e.target.password.value, e.target.email.value)
        .then (() => {
            cDisabled(true)
            props.renderLogin()
            toastr["success"]("You can now login.", "Registration Successful!")
        })
        .catch(() => [
            cDisabled(false)
            // toastr or equivalent
        ])
    }


    return (
   
    <>
    <div className='loginContainer'>
        <button className='login' onClick={props.renderLogin}>log in</button>
    </div>

    <div className='registerContainer'>

        <div className='rightbar'></div>

        <div className='registerPageContents'>
            <div>
                <h1> Welcome to the page</h1>
                <p>You can create an account in order to be able to make posts and add comments.</p>
            </div>

            <div className='formContainer' >
                <form className='formContents' onSubmit={submitHandler}>
                    <label htmlFor="Username"></label>
                    <input className='loginInput' name="username" type="text" placeholder='Username' />
                    <label htmlFor="Email"></label>
                    <input className='loginInput' name="email" type="text" placeholder='Email' />
                    <label htmlFor="Display Name"></label>
                    <input className='loginInput' name="displayName" type="text" placeholder='Display Name' />
                    <label htmlFor='password'></label>
                    <input className='loginInput' name="password" type="password" placeholder='Password'/>
                    {/* <label htmlFor='confirmPassword'></label>
                    <input className='loginInput' type="password" placeholder='Confirm your password'/> */}
                    <button className='loginButton' disabled={disabled} type="submit">Register</button>
                   
                </form>
            </div>
                
        </div>
        
        <div className='leftbar'></div>

    </div>

   
    
    </>
  )
}

  

