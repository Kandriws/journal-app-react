import { logoutFirebase, signInWithEmailPassword, signInWithGoogle } from "../../../src/firebase/providers";
import { checking, login, logout } from "../../../src/store/auth";
import { checkingAuth, startGoogleSignIn, startLogout, startSignInWithEmailPassword } from "../../../src/store/auth/thunks";
import { clearNotesLogout } from "../../../src/store/journal";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock('../../../src/firebase/providers');
const dispatch = jest.fn();

beforeEach(() => {
    jest.clearAllMocks();
});

describe('Test en thunks auth', () => {

    test('Debe de invocar checkingAuth', async () => {
        await checkingAuth()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checking());
    });

    test('startGoogleSignIn should call checking and login - success', async () => {

        const loginData = {
            ok: true,
            ...demoUser
        };
        await signInWithGoogle.mockResolvedValue(loginData);

        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checking());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));

    });
    test('startGoogleSignIn should call checking and logout - error', async () => {

        const loginData = {
            ok: false,
            msg: 'Error'
        };

        await signInWithGoogle.mockResolvedValue(loginData);

        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checking());

        expect(dispatch).toHaveBeenCalledWith(logout({ errorMessage: loginData.msg }));
    });

    test('startSignInWithEmailPassword should call checking and login - success', async () => {

        const loginData = {
            ok: true,
            ...demoUser
        };

        const formData = {
            email: demoUser.email,
            password: '123456'
        };
        await signInWithEmailPassword.mockResolvedValue(loginData);

        await startSignInWithEmailPassword(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checking());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));

    });

    test('startLogout should call logout', async () => {
            
            await startLogout()(dispatch);
            expect(logoutFirebase).toHaveBeenCalled();
            expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
            expect(dispatch).toHaveBeenCalledWith(logout());
    });
});