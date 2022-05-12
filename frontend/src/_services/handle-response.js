import { authService } from './auth-service'

export function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text)        
        if (!response.ok) {
            if ([401,403].indexOf(response.status) !== -1) {
                // automatically logsout and resets page if user does unauthorized/forbidden request
                console.log("forbidden request")
                authService.logout()
                window.location.reload(true)
            }

            const error = (data && data.message) || response.statusText
            return Promise.reject(error)
        }

        return data
    })
}