import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        const { displayName, email, photoURL, uid } = result.user;

        return {
            ok: true,
            displayName,
            email,
            photoURL,
            uid
        }


    } catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            msg: 'Error en la autenticación ::' + errorCode + ' :: ' + errorMessage
        }
    }
}

export const registerUserWithEmailPassword = async ({ email, password, displayName }) => {
    try {
        const result = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { photoURL, uid } = result.user;

        await updateProfile(FirebaseAuth.currentUser, { displayName });

        return {
            displayName,
            email,
            photoURL,
            uid,
            ok: true,
        }
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false,
            msg: 'Error en la autenticación ::' + errorCode + ' :: ' + errorMessage
        }
    }
}

export const signInWithEmailPassword = async ({ email, password }) => {
    try {
        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { photoURL, uid } = result.user;

        return {
            email,
            photoURL,
            uid,
            ok: true,
        }
    } catch (error) {
        return {
            ok: false,
            msg: 'Estos credenciales no coinciden con nuestros registros'
        }
    }
}

export const logoutFirebase = async () => {
    try {
        await FirebaseAuth.signOut();

        return {
            ok: true,
        }
    } catch (error) {
        return {
            ok: false,
            msg: 'Error al cerrar sesión'
        }
    }
}