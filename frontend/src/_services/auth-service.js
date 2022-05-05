import { BehaviorSubject } from 'rxjs';
import { handleResponse } from './handle-response'
const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
const url = 'http://localhost:3000'

export const authService = {
    login,
    logout,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () {return currentUserSubject.value}
}

function login ( username, password ) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({username, password})
    }

    return fetch(`${url}/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store users details in localStorage so they stay logged in after refresh
            localStorage.setItem('currentUser', JSON.stringify(user))
            // localStorage.setItem('token', JSON.stringify(user.token))       
            currentUserSubject.next(user)

            return user
        })
}

function logout() {
    // removes user details from localStorage thus logging them out
    localStorage.setItem("currentUser", "{}")
    currentUserSubject.next({})
}