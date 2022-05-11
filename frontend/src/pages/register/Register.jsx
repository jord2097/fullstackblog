import './register.css'
import Login from '../login/Login'
import React, { useState } from 'react'


export default function Register(props) {
    const [disabled, cDisabled] = useState(false)

    const submitHandler = (e) => {
        e.preventDefault()
        cDisabled(true)
        props.client
        .register(e.target.displayName.value, e.target.username.value, e.target.password.value, e.target.email.value)
        .then (() => {
            cDisabled(true)
            props.renderLogin()
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
                   
                </form>
            </div>
                
        </div>
        
        <div className='leftbar'></div>

    </div>

   
    
    </>
  )
}

  

