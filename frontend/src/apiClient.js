import axios from 'axios';
import { authHeader } from './_services/auth-header'
import { handleResponse } from './_services/handle-response'
import { authService } from './_services/auth-service'
const url = 'https://hdj-blog-api.herokuapp.com' // URL for the API server

export class apiClient {
    constructor(clientToken) {
        this.token = clientToken         
    }

    
   
    apiCall(method,url,data,headers) {
        return axios({
            method,
            url,            
            data,            
        }).catch((error) => {
            throw error
        })
    }

    authenticatedCall(method,url,data, headers) {
        return axios({
            method,                     
            url,            
            data,
            headers: {
                Authorization: 'Bearer ' + this.token
            }                       
        }).catch((error) => {
            throw error
        })
    }

    // auth operations

    async register(displayName, username, password, email) {
        return await this.apiCall("post", `${url}/register`, { displayName, username, password, email } )
    }

    async login(username, password) {
        return authService.login(username, password)
    }

    // basic post operations    

    async getPosts() {
        if (this.token) {
            return await this.authenticatedCall("get", `${url}/posts`)

        } else {
            return await this.apiCall("get", `${url}/posts`)

        }
    }
    
    async getSinglePost(postID) {
        return await this.apiCall("get", `${url}/posts/${postID}`)
    }

    createPost(title, mainText, img, category, tags, draft, published) {
        return this.authenticatedCall("post", `${url}/posts/create`, { title, mainText, img, category, tags, draft, published }, authHeader)
    }    

    updatePost(_id, title, mainText, img, category, tags, draft, published) {
        return this.authenticatedCall("put", `${url}/posts/${_id}`, { title, mainText, img, category, tags, draft, published })
    }    

    deletePost(_id) {        
        return this.authenticatedCall("delete", `${url}/posts/${_id}`)
    }    

    // basic user operations

    getUsers() {
        return this.apiCall("get", `${url}/users`)
    }

    getUser(token) {
        return this.apiCall("get", `${url}/user`, { token })
    }

    addUser(username, password, displayName, email) {
        return this.authenticatedCall("post", `${url}/users/create`, { username, password, displayName, email})
    }

    updateUser(_id, username, password, displayName, email) {
        return this.authenticatedCall("put", `${url}/users/${_id}`, { username, password, displayName, email })
    }

    deleteUser(_id) {
        return this.authenticatedCall("delete", `${url}/users/${_id}`)
    }

    // extra features

    searchCategory(category) {
        if (this.token) {
            return this.authenticatedCall("get", `${url}/search/category?c=${category}`)       
        } else {
            return this.apiCall("get", `${url}/search/category?c=${category}`)     
        }
           
    }

    searchTag(tag) {
        if (this.token) {
            return this.authenticatedCall("get", `${url}/search/tags?t=${tag}`)
        }
        return this.apiCall("get", `${url}/search/tags?t=${tag}`)
    }

    showDrafts() {
        return this.authenticatedCall("get", `${url}/posts/drafts`)
    }

    showUnpublished() {
        return this.authenticatedCall("get", `${url}/posts/unpublished`)
    }
    
    searchbar(query) {
        return this.authenticatedCall("get", `${url}/search?q=${query}`)
    }

}