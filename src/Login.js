import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import "./Login.css";
import { login } from "./features/userSlice";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid, 
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL
            })
            );
        }).catch(error => alert(error));
    };
        
    const register = () => {
        if (!name) {
            return alert("Please enter a full name!");
        }

        auth
        .createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                
            })
            .then(() => {
                dispatch(
                    login({
                        email: userAuth.user.email,
                        uid: userAuth.user.uid, 
                        displayName: name,
                        
                })
                );
            });
        })
        .catch(error => alert(error));
    };

  return (
    <div className="login" >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjcrFeTovYpISIXKPTtp_fiuFJb34avYyowA&usqp=CAU" alt="" />
        <form>
            <input value={name} onChange={(e) => setName(e.target.value)}placeholder="Full Name (New User)" type="text"/>
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" type="email"/>
            <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password"/>

            <button type='submit' onClick={loginToApp}>Sign In</button>
        </form>
        <p>Not a member?{" "}
            <span className="login__register" onClick={register} >Register Now</span>
        </p>
    </div>
  )
}

export default Login