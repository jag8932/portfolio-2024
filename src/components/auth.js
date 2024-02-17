import { auth, googleProvider } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  //  console.log(auth?.currentUser?.email);
    const signUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error);
        }
    };

    const signIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error);
        }
    };
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.log(error);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth).then(() => { console.log("Signed Out") });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
            <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Admin
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={signUp}>Sign In</Dropdown.Item>
                    <Dropdown.Item onClick={signInWithGoogle}><img className="buttonImg" src="/google-icon-1.webp" alt="google icon"></img>Sign In With Google</Dropdown.Item>
                    <Dropdown.Item onClick={logout}>Sign Out</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}