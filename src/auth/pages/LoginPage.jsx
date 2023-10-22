import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { checkingAuth, startGoogleSignIn, startSignInWithEmailPassword } from '../../store/auth';

const formData = {
    email: '',
    password: ''
}

export const LoginPage = () => {

    const { status, error } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    const { email, password, onInputChange, formState } = useForm(formData);

    const isAuthenticating = useMemo(() => {
        return status === 'checking';
    }, [status]);


    const onSubmit = (e) => {
        e.preventDefault();
        dispatch(checkingAuth());
    }

    const onGoogleLogin = () => {
        dispatch(startGoogleSignIn());
    }

    const onEmailLogin = () => {
        dispatch(startSignInWithEmailPassword(formState));
    }
    return (
        <AuthLayout title='Login'>
            <form onSubmit={onSubmit}>
                <Grid container>
                    <Grid item sx={{ mt: 2 }} xs={12}>
                        <TextField label="Email" variant="outlined"
                            fullWidth placeholder="Email@dominio.com"
                            name="email"
                            value={email}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid item sx={{ mt: 2 }} xs={12}>
                        <TextField label="Password" variant="outlined" fullWidth placeholder="Contraseña"
                            type="password"
                            name="password"
                            value={password}
                            onChange={onInputChange}
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
                        <Grid item xs={12} display={!!error ? '' : 'none'}>
                            <Alert severity="error">
                                {error}
                            </Alert>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Button variant="contained" fullWidth type="submit"
                                onClick={onEmailLogin}
                                disabled={isAuthenticating}
                            >
                                Login
                            </Button>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Button variant="contained" fullWidth
                                onClick={onGoogleLogin}
                                disabled={isAuthenticating}>
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="end" direction="row">
                        <Link component={RouterLink} variant="body2" to="/auth/register">
                            Crear una cuenta
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </AuthLayout>
    )
}
