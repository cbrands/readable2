import axios from 'axios';
import { getHeaders } from '../utils/AuthorizationHelper';

const api = "http://localhost:5001";

export const FETCH_CATEGORIES = "fetch_categories";
export const FETCH_POSTS = "fetch_posts";
export const FETCH_POSTS_FOR_CATEGORY = "fetch_posts_for_category";
export const FETCH_POST = "fetch_post";
export const SELECT_CATEGORY = "select_category";
export const FETCH_COMMENTS = "fetch_comments";
export const NEW_POST = "new_post";
export const EDIT_POST = "edit_post";

export function selectCategory(category) {
    return {
        type: SELECT_CATEGORY,
        payload: category
    };
}

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

export function fetchPostsForCategory(name) {
    const request = axios.get(`${api}/${name}/posts`, getHeaders());
    return {
        type: FETCH_POSTS_FOR_CATEGORY,
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

export function fetchComments(postId) {
    const request = axios.get(`${api}/posts/${postId}/comments`, getHeaders());
    return {
        type: FETCH_COMMENTS,
        payload: request
    };
}

export function newPost(post) {
    const request = axios.post(`${api}/posts`, post, getHeaders())
    return {
        type: NEW_POST,
        payload: request
    };
}

export function editPost(post) {
    const request = axios.put(`${api}/posts/${post.id}`, post, getHeaders())
    return {
        type: EDIT_POST,
        payload: request
    };
}