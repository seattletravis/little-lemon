import { BsPersonCircle } from "react-icons/bs"


//style
import "../App.css"

function Login() {
  return (
    <div className='loginPage'>
      <h2>This is an Example Login, you're info will not be saved and you will not be logged in.</h2>
      <div className='loginContainer'>
        <h2>login page</h2>
        <div>
          <BsPersonCircle className='loginIcon'/>
        </div>
        <div>
          <div className='loginField'>
            <label htmlFor="">Email</label>
            <input type="email" />
          </div>
          <div className='loginField'>
            <label htmlFor="">Password</label>
            <input type="password" />
          </div>
        </div>
        <button className='loginButton'>Login</button>
      </div>


    </div>
  )
}

export default Login;