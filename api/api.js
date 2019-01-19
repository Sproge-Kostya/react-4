export function getPosts(params) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${params.limit}&_page=${params.page}`)
        .then(response => {
            return response.json().then(json =>{
                return{
                    json :json,
                    count: response.headers.get('x-total-count')
                }
            })
        } )
        .then(json => json);
}

export function getPost(params) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
        .then(response => response.json())
        .then(json => json)
}

export function getUserByPost(params) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        .then(response => response.json())
        .then(json => json)
}

export function getCommentsByPost(params) {
    return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${params.postId}`)
        .then(response => response.json())
        .then(json => json)
}