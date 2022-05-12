import { authService } from "./auth-service";

export function authHeader() {
    // returns correct auth header with jwt token 
    const currentUser = authService.currentUserValue
    console.log(currentUser)
    if (currentUser && currentUser.token) {
        return `Pisstake`
    } else {
        return ``
    }
}

//  `Bearer ${currentUser.token}`