import { createUserWithEmailAndPassword } from "firebase/auth";
import { registerUserWithEmailPassword, signInWithEmailPassword, signInWithGoogle, logoutFirebase } from "../../firebase/providers";
import { checking, login, logout } from "./authSlice";
import { clearNotesLogout } from "../journal";

export const checkingAuth = (email, password) => {
    return async (dispatch) => {
        dispatch(checking());
    }
}
export const startGoogleSignIn = () => {
    return async (dispatch) => {
        dispatch(checking());
        const result = await signInWithGoogle();

        if (!result.ok) {
            return dispatch(logout({ errorMessage: result.msg }));
        }

        dispatch(login(result));
    }
}

export const startRegisterWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {
        dispatch(checking());

        const { ok, uid, photoURL, msg } = await registerUserWithEmailPassword({ email, password, displayName });
        
        if (!ok) return dispatch(logout({ errorMessage: msg }));

        dispatch(login({ uid, email, displayName, photoURL }));

    }
}

export const startSignInWithEmailPassword = ({ email, password }) => {
    return async (dispatch) => {
        dispatch(checking());

        const result = await signInWithEmailPassword({ email, password });

        if (!result.ok) return dispatch(logout({ errorMessage: result.msg }));

        dispatch(login(result));
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase();
        dispatch(clearNotesLogout());
        dispatch(logout());
    }
}