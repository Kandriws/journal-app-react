export const initialState = {
    status: 'checking',// 'checking', 'authenticated', 'unauthenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    error: null,
}
export const authenticatedState = {
    status: 'authenticated',// 'checking', 'authenticated', 'unauthenticated'
    uid: '123ABC',
    email: 'testauth@google.com',
    displayName: 'test',
    photoURL: 'https://demo.png',
    error: null,
}
export const unauthenticatedState = {
    status: 'unauthenticated',// 'checking', 'authenticated', 'unauthenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    error: null,
}
export const demoUser = {
    uid: '123ABC',
    email: 'demo@google.com',
    displayName: 'demo',
    photoURL: 'https://demo.png',
}