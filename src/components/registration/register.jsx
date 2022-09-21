import './login.css';
import { useState } from 'react';
import axios from "axios";
const Register=()=>{
    const [user, setUser]=useState({});
    const register=()=>{
        const {email,password,cpassword}=user;
        if(email && password && password===cpassword){
           // alert("posted")
            axios.post("http://localhost:5000/register",user)
            .then(res=>alert(res.data.message))
        }
        else{
            alert("invalid input")
        }
    }
    return(
        <>
        <div className="login-main" >
            <div className="login-box">
                <div className="login-logo">LOGO</div>
                <div className="login-para">Create New Account</div>
                <form className='login-form'>
                    <input className='login-input' onChange={(e)=>setUser({...user,email:e.target.value})} type="email" placeholder="Mail ID" name="email" required/>
                    <input className='login-input' onChange={(e)=>setUser({...user,password:e.target.value})} type="password" placeholder="Password" name="password" required/>
                    <input className='login-input' onChange={(e)=>setUser({...user,cpassword:e.target.value})} type="password" placeholder="Confirm Password" name="cpassword" required/>
                    <button className='login-btn' type="submit" onClick={register}>Sign up</button>
                </form>
            </div>
            <div className='addition'>
            <a href='/'>Sign in</a>
            </div>
        </div>
        </>
    );
}
export default Register;