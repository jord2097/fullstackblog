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

    // basic post operations

    getPosts() {
        return this.apiCall("get", `${url}/posts`)
    }

    createPost(title, mainText, img, category, tags, draft, published) {
        return this.apiCall("post", `${url}/create`, { title, mainText, img, category, tags, draft, published })
    }

    updatePost(_id, title, mainText, img, category, tags, draft, published) {
        return this.apiCall("put", `${url}/${_id}`, { title, mainText, img, category, tags, draft, published })
    }

    deletePost(_id) {
        return this.apiCall("delete", `${url}/${_id}`)
    }

    // basic user operations

    getUsers() {
        return this.apiCall("get", `${url}/users`)
    }

    addUser(username, password, displayName, email) {
        return this.apiCall("post", `${url}/users/create`, { username, password, displayName, email})
    }

    updateUser(_id, username, password, displayName, email) {
        return this.apiCall("put", `${url}/users/${_id}`, { username, password, displayName, email })
    }

    deleteUser(_id) {
        return this.apiCall("delete", `${url}/users/${_id}`)
    }

    // extra features

    searchCategory(category) {
        return this.apiCall("get", `${url}/search/category`, {category})        
    }

    searchTags(tags) {
        return this.apiCall("get", `${url}/search/tags`, {tags} )
    }

    showDrafts() {
        return this.apiCall("get", `${url}/posts/drafts`)
    }

}