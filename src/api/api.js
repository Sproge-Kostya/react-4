const API = 'https://jsonplaceholder.typicode.com';

// string , Object

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
            if(response.headers.get('x-total-count')){
                return response.json().then(json =>{
                    return{
                        json :json,
                        count: response.headers.get('x-total-count')
                    }
                })
            }else{
                return response.json().then(json =>{
                    return{
                        json :json,
                        count: json.length
                    }
                });
            }
        } )
        .then(json => json);
}