import style from "../login/login.module.css"
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";


export default function Registration() {


  return (
	<div>
	  <div className={style.logPage} >
		<form>
		  <input type='email' id='email' name='email' placeholder='Enter your email'/>
		  <input type='password' id='password' name='password' placeholder='Enter your password'/>
		  <button className={style.loginButton} name='log'>Registration</button>

		</form>
	  </div>
	</div>
  )
}