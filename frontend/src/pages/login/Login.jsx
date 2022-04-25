import './login.css'

export default function Login() {
  return (

    <div className='loginPage'>

        <div className='rightbar'></div>
            <div className='loginPageText'>
                <div>
                <h1> Welcome to the page</h1>
                <p>Here you can login or create a username to login to the blog page.</p>
                </div>
                <div className='form'>
                    <form >
                        <label htmlFor="Email"></label>
                        <input className='loginInput'  type="text" placeholder='Enter your email here' />
                        <label htmlFor='password'></label>
                        <input className='loginInput' type="text" placeholder='Enter your password'/>
                        <button className='loginButton'>Login</button>
                    </form>
                </div>

               
                
            </div>
        
        <div className='leftbar'></div>

    </div>
    
  )
}
