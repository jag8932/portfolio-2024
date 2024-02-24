import { auth, googleProvider, analytics } from '../config/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
            console.log(auth.currentUser);
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

    const isSignedIn = () => {
        if (auth.currentUser == null || !auth.currentUser) {
            return false
        }
        return true;
    }

    const isAdmin = () => {
        if (!isSignedIn) {
            return false;
        }
        if (auth.currentUser.email != "jacobgoodwillie@gmail.com") {
            return false;
        }
        
        return true;
    }

    return (
            <div className="off-canvas-container">
                <div className="show-off-canvas">
                    <button onClick={handleShow}>Admin</button>
                </div>
            
            <Offcanvas placement="end" show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>{isSignedIn() ? `Welcome back ${auth.currentUser.displayName}!` : 'Not Signed In'}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {isSignedIn() ? 
                    <>
                    <button type="button" className="btn btn-light" onClick={logout}>Sign Out</button>
                    {isAdmin() ? <>Admin tools coming soon</> : <><br></br>No admin permissions</>}
                    </> 
                    : 
                    <>
                    <button type="button" className="btn btn-light" onClick={signInWithGoogle}><img src="google-icon-1.webp" alt="google logo" style={{ width: '25px' }}></img>Sign in with Google</button>
                    </>}
                    
                </Offcanvas.Body>
            </Offcanvas>
            </div>
    )
}