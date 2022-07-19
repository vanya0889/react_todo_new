import style from "./login.module.css"
import {Link} from "react-router-dom";



export default function Login() {


  return (
	<div>
	  <Link className={style.aboutLink} to="/about"> About </Link>
	  <div className={style.logPage} >
		<form>
		  <input type='email' id='email' name='email' placeholder='Enter your email'/>
		  <input type='password' id='password' name='password' placeholder='Enter your password'/>
		  <button className={style.loginButton} name='log'>Login</button>
		  <Link className={style.link} to="/registration"> Registration </Link>
		</form>
	  </div>
	</div>
  )
}