import { BsPersonCircle } from "react-icons/bs"


//style
import "../App.css"

function Login() {
  return (
    <div className='loginPage'>
      <h2>Example login page. You're info will not be saved and you will not be logged in.</h2>
      <div className='formDiv'>
        <form className='bookingForm'>
          <div className='loginPage'>
            <div className='loginContainer'>
              <h2>login page</h2>
              <div>
                <BsPersonCircle className='loginIcon'/>
              </div>
              <div>
                <div className='loginField'>
                  <label htmlFor="">Email</label>
                  <input type="email" placeholder="Email" required/>
                </div>
                <div className='loginField'>
                  <label htmlFor="">Password</label>
                  <input type="password" placeholder="Password" required/>
                </div>
              </div>
              <button type="submit" className='loginButton'>Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>

  )
}

export default Login;
