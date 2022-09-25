import './login.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Login=()=>{
    const navigate=useNavigate();
    const [user, setUser]=useState({});
    const login =(e)=>{
        e.preventDefault();
        axios.post("https://realrohan.herokuapp.com/login",user)
        .then(res=>{
            const temp=(res.data.user.email).split("@");
            const name=temp[0];
            
            localStorage.setItem("username",name)
            alert(res.data.message)
            if(res.status===200){
                 navigate("/desk1")
            } 
         localStorage.setItem("userInfo",res.data.token);
        })
    }
    return(
        <>
        <div className="login-main" >
            <div className="login-box">
                <div className="login-logo">LOGO</div>
                <div className="login-para">Enter your credentials to access your account</div>
                <form className='login-form'>
                    <input className='login-input' onChange={(e)=>setUser({...user,email:e.target.value})} type="email" placeholder="User ID" name="email" required/>
                    <input className='login-input' onChange={(e)=>setUser({...user,password:e.target.value})} type="password" placeholder="Password" name="password" required/>
                    <button className='login-btn'  onClick={login} type="submit">Sign In</button>
                </form>
                <div id='login-a'><a id="anchor" href="/register">Sign Up</a></div>
            </div>
            <div className='addition'>
                <pre>Don't have an account?</pre>
                <a href='/register'>Sign up</a>
            </div>
        </div>
        </>
    );
}
export default Login;