import React, { useState } from 'react';
import './Login.css';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {

    //const functionInReact = () => {};

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [profilePic, setProfilePic] = useState("");

    // here is our dispatch to link REDUX our firebase user
    const dispatch = useDispatch();

    const loginToApp = e => {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(userAuth => {
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,
            }));
        }).catch((error) => alert(error));
    };

    // then syntax => 
    // function.then(() => {})

    const register = e => {
        if (!name) {
            return alert("Please enter a fill name");
        }

        // Acceed to Firebase
        auth.createUserWithEmailAndPassword(email, password).then(
            (userAuth) => {
                userAuth.user.updateProfile({
                    displayName: name,
                    photoURL: profilePic,
                }).then(() => {
                    // Link Firebase we give to REDUX : method to do that => dispatch
                    // import login from userSlice
                    dispatch(login({
                        email: userAuth.user.email,
                        // user email
                        uid: userAuth.user.uid,
                        // from firebase
                        displayName: name,
                        // our name
                        photoUrl: profilePic,
                        // photo : profilePic
                    }))
                });
            }).catch((error) => alert(error.message));
        // the register push this in our authentication firebase
    };

    return (
        <div className='login'>
            <img src="https://www.ecoris.com/wp-content/uploads/2021/09/Linkedin-logo-2.png" alt="icon"/>

            <form action="">
                <input 
                    value={name} onChange={e => setName(e.target.value)} 
                    placeholder='Full name required if regestering' 
                    type="text" 
                />
                <input 
                    value={profilePic} onChange={e => setProfilePic(e.target.value)} 
                    placeholder='Profile Picture URL (optional)' 
                    type="text" 
                />
                <input 
                    value={email} onChange={e => setEmail(e.target.value)} 
                    placeholder='Email' 
                    type="text" 
                />
                <input 
                    value={password} onChange={e => setPassword(e.target.value)} 
                    placeholder='Password' 
                    type="password"
                />
                <button 
                    type="submit" 
                    onClick={loginToApp}>Sing In
                </button>
            </form>

            <p>Not a member ? 
                <span onClick={register} className='login__register'>Register now</span>
            </p>
        </div>
    )
}

export default Login
