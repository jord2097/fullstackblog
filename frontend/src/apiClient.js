import axios from 'axios';
const url = 'http://localhost:3000' // URL for the API server

export class apiClient {
    constructor(token) {
        this.token = token
    }

    apiCall(method,url,data) {
        return axios({
            method,
            url,
            data,
        }).catch((error) => {
            throw error
        })
    }

    authenticatedCall(method,url,data) {
        return axios({
            method,
            url,
            headers: {
                authorization: this.token
            },
            data,
        }).catch((error) => {
            throw error
        })
    }

    // auth operations

    async register(displayName, username, password, email) {
        return await this.apiCall("post", `${url}/register`, { displayName, username, password, email } )
    }

    async login(username, password) {
        return await this.apiCall("post", `${url}/login`, { username, password })
    }

    // basic post operations

    getPosts() {
        return this.apiCall("get", `${url}/posts`)
    }

    createPost(title, mainText, img, category, tags, draft, published) {
        return this.authenticatedCall("post", `${url}/posts/create`, { title, mainText, img, category, tags, draft, published })
    }

    updatePost(_id, title, mainText, img, category, tags, draft, published) {
        return this.apiCall("put", `${url}/posts/${_id}`, { title, mainText, img, category, tags, draft, published })
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
        return this.apiCall("get", `${url}/search/category`, {category})        
    }

    searchTags(tags) {
        return this.apiCall("get", `${url}/search/tags`, {tags} )
    }

    showDrafts() {
        return this.authenticatedCall("get", `${url}/posts/drafts`)
    }

    showUnpublished() {
        return this.authenticatedCall("get", `${url}/posts/unpublished`)
    }
    

}