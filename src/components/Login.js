import { GoPerson } from 'react-icons/go'

//style
import '../App.css'

function Login() {
  return (
    <>
      <div className='example'>
        <h3>Example Login Form - Credentials will not be save, and you will not login. </h3>
      </div>

      <div className='loginContainer'>
        <div className='loginForm'>
          <h1>Login Page</h1>
          <GoPerson className='loginIcon'/>
          <div className='loginField'>
            <label htmlFor="">Email</label>
            <input type="email" />
          </div>
          <div className='loginField'>
            <label htmlFor="">Password</label>
            <input type="password" />
          </div>
          <button className='loginButton'>Login</button>
        </div>


      </div>
    </>

  )
}

export default Login;
