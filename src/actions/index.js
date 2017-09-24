import axios from 'axios';
import { getHeaders } from '../utils/AuthorizationHelper';

const api = "http://localhost:5001";

export const FETCH_CATEGORIES = "fetch_categories";
export const FETCH_POSTS = "fetch_posts";
export const FETCH_POST = "fetch_post";

export function fetchCategories() {
    const request = axios.get(`${api}/categories`, getHeaders());

    return {
        type: FETCH_CATEGORIES,
        payload: request
    };
}


export function fetchPosts() {
    const request = axios.get(`${api}/posts`, getHeaders());

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function fetchPost(id) {
    const request = axios.get(`${api}/posts/${id}`, getHeaders());

    return {
        type: FETCH_POST,
        payload: request
    };
}