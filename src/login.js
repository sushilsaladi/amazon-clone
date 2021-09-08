import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { auth } from './firebase';
import './Login.css';

function Login() {
    const history = useHistory();
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("")
    function login(e){
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password).then((auth)=>{
            //logged in meesage
            history.push("/")
        }).catch((e) => alert(e.message))
    }
    function register(e){
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password).then((auth) => {
            //create a user successfully
            history.push("/")
        }).catch((e) => alert(e.message))
    }
    return (
            <div className="login">
                <Link to="/">
                    <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png" alt="dondaisbetter"></img>
                </Link>
                <div className="login__container">
                    <h1>Sign In</h1>
                    <form>
                        <h5>Email</h5>
                        <input value={email} onChange={event => setEmail(event.target.value) } type="email"/>
                        <h5>Password</h5>
                        <input value={password} type="password" onChange={event => setPassword(event.target.value)}/>
                        <button onClick={login} className="login__signInButton">Sign In</button>
                        <p>FuckMonkeyKnife</p>
                        <button onClick={register}className="login__register">Create your Amazon Account</button>
                    </form>
                </div>
            </div>
    )
}

export default Login