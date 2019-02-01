const API = 'https://jsonplaceholder.typicode.com';
// sting , Object
export function getData(path,options) {
    let url = `${API + path}`;
    let params = "";

    if(options && options.hasOwnProperty('params')){
        for (let key in options.params) {
            if (params != "") {
                params += "&";
            }
            params += key + "=" + options.params[key];

        }
        url += `${params ? '?' + params : ''}`;
    }

    return fetch(url)
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

// export function getPost(params) {
//     return fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
//         .then(response => response.json())
//         .then(json => json)
// }
//
// export function getUserByPost(params) {
//     return fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
//         .then(response => response.json())
//         .then(json => json)
// }
//
// export function getCommentsByPost(params) {
//     return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${params.postId}`)
//         .then(response => response.json())
//         .then(json => json)
// }