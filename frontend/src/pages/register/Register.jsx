import './register.css'

export default function Register() {
  return (
   
<>
    <div className='loginContainer'>
        <button className='login'>log in</button>
    </div>

    <div className='registerContainer'>

        <div className='rightbar'></div>

        <div className='registerPageContents'>
            <div>
                <h1> Welcome to the page</h1>
                <p>You can create an account in order to be able to make posts and add comments.</p>
            </div>

            <div className='formContainer'>
                <form className='formContents'>
                    <label htmlFor="Email"></label>
                    <input className='loginInput'  type="text" placeholder='Enter your email here' />
                    <label htmlFor='password'></label>
                    <input className='loginInput' type="text" placeholder='Enter your password'/>
                    <label htmlFor='confirmPassword'></label>
                    <input className='loginInput' type="text" placeholder='Confirm your password'/>
                    <div className='CreateAccountContainer'><button className='createAccountButton'> Create Account</button></div>
                </form>
            </div>
                
        </div>
        
        <div className='leftbar'></div>

    </div>

   
    
    </>
  )
}

  

