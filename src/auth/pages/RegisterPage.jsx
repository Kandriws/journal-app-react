import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Google } from "@mui/icons-material";
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks';
import { startRegisterWithEmailPassword } from '../../store/auth/thunks';

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [(value) => value.includes('@'), 'Email invalido'],
  password: [(value) => value.length > 5, 'La contraseña debe tener al menos 6 caracteres'],
  displayName: [(value) => value.length > 3, 'El nombre debe tener al menos 4 caracteres']
}
export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, error } = useSelector(state => state.auth);
  const isCheckingAuth = useMemo(() => status === 'checking', [status]);

  const {
    email, password, displayName, onInputChange, formState,
    isFormValid, emailValid, passwordValid, displayNameValid
  } = useForm(formData, formValidations);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if (!isFormValid) return;

    dispatch(startRegisterWithEmailPassword(formState));
  }

  return (
    <AuthLayout title='Register'>
      <form onSubmit={onSubmit} >
        <Grid container>
          <Grid item sx={{ mt: 2 }} xs={12}>
            <TextField label="Nombre completo" variant="outlined" fullWidth placeholder="Nombre completo"
              name="displayName"
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item sx={{ mt: 2 }} xs={12}>
            <TextField label="Email" variant="outlined" fullWidth placeholder="Email@dominio.com"
              type="email"
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>
          <Grid item sx={{ mt: 2 }} xs={12}>
            <TextField label="Password" variant="outlined" fullWidth placeholder="Contraseña"
              type="password"
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>
          <Grid container spacing={2} sx={{ mt: 2, mb: 2 }}>
            <Grid item xs={12} display={!!error ? '' : 'none'}>
              <Alert severity="error">
                {error}
              </Alert>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth type="submit" disabled={isCheckingAuth}>
                Crear cuenta
              </Button>
            </Grid>
          </Grid>
          <Grid container justifyContent="end" direction="row">
            <Typography variant="body2" sx={{ mr: 2 }}>¿Ya tienes una cuenta?</Typography>
            <Link component={RouterLink} variant="body2" to="/auth/login">
              Iniciar sesión
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
