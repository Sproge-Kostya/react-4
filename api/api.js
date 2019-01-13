export function getPosts(params) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${params.limit}&_page=${params.page}`)
        .then(response => response.json())
        .then(json => json)
}

export function getPost(params) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${params.post}`)
        .then(response => response.json())
        .then(json => json)
}

export function getUserByPost(params) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=1`)
        .then(response => response.json())
        .then(json => json)
}

export function getCommentsByPost(params) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${params.limit}&_page=${params.page}`)
        .then(response => response.json())
        .then(json => json)
}