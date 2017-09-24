import axios from 'axios';

const api = "http://localhost:5001"

let token = localStorage.token
if (!token)
    token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
    'Accept': 'application/json',
    'Authorization': token
}

export const fetchCategoriesFromServer = () => new Promise((resolve, reject) => {
    const result = axios.get(`${api}/categories`, { headers });
    result
        .then(({data}) => resolve(data))
        .catch((err) => reject(err));
});

export const fetchPostsFromServer = () => new Promise((resolve, reject) => {
    const result = axios.get(`${api}/posts`, { headers });
    result
        .then(({data}) => resolve(data))
        .catch((err) => reject(err));
});