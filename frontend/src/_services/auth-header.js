import { authService } from "./auth-service";

export function authHeader() {
    // returns correct auth header with jwt token 
    const currentUser = authService.currentUserValue
    if (currentUser && currentUser.token) {
        return { Authorization: `Bearer ${currentUser.token}`}
    } else {
        return {}
    }
}
