import { authSlice, checking, login, logout } from "../../../src/store/auth/authSlice";
import { authenticatedState, demoUser, initialState, unauthenticatedState } from "../../fixtures/authFixtures";

describe('Pruebas en authSlice', () => {
  test('Debe regresar el estado inicial y llamarse "auth"', () => {
    const state = authSlice.reducer(initialState, {});
    expect(authSlice.name).toBe('auth');
    expect(state).toEqual(initialState);
  });

  test('Debe realizar la autenticacion ', () => {
    const state = authSlice.reducer(initialState, login(demoUser));
    expect(state).toEqual({
      status: 'authenticated',
      error: null,
      ...demoUser
    });
  });

  test('Debe realizar el logout', () => {
    const state2 = authSlice.reducer(authenticatedState, logout());
    unauthenticatedState.error = undefined;
    expect(state2).toEqual(unauthenticatedState);
  });

  test('Debe realizar el logout y mostrar mensaje de error', () => {
    const errorMessage = 'Error en la autenticacion';

    const state = authSlice.reducer(authenticatedState, logout({ errorMessage }));
    unauthenticatedState.error = errorMessage;
    expect(state).toEqual(unauthenticatedState);
  });

  test('Debe cambiar el estado a checking', () => { 
    const state = authSlice.reducer(authenticatedState, checking());
    expect(state.status).toBe('checking');
   })
});
