import { REMOVE_LOADER, SET_ERRORS, SET_LOADER, SET_POSTS, SET_SINGLE_POST, SET_SUCCESS_MESSAGE } from "../types/PostType"
import axiosInstance from "../../helper/axiosInstance";

export const fetchPosts = () =>{
    return async(dispatch)=>{
       try {
            dispatch({type: SET_LOADER});
            const {data:{response}} = await axiosInstance.get(`/all-post`);
            dispatch({type: SET_POSTS, payload: response});
            dispatch({type: REMOVE_LOADER});
       } catch (error) {
            const {errors} = error.response.data;
            dispatch({type: REMOVE_LOADER});
            dispatch({type: SET_ERRORS, payload: errors});
       }
    }
}
export const createPost = (postData) =>{
     return async(dispatch)=>{
        try {
             dispatch({type: SET_LOADER});
             const {data:{message}} = await axiosInstance.post(`/create-post`, postData);
             dispatch({type: SET_SUCCESS_MESSAGE, payload: message});
        } catch (error) {
             const {errors} = error.response.data;
             dispatch({type: REMOVE_LOADER});
             dispatch({type: SET_ERRORS, payload: errors});
        }
     }
 }
 export const editPost = (id) =>{
     return async(dispatch)=>{
        try {
             dispatch({type: SET_LOADER});
             const {data:{response}} = await axiosInstance.get(`/edit-post/${id}`);
             dispatch({type: SET_SINGLE_POST, payload: response});
             dispatch({type: REMOVE_LOADER});
        } catch (error) {
             const {errors} = error.response.data;
             dispatch({type: REMOVE_LOADER});
             dispatch({type: SET_ERRORS, payload: errors});
        }
     }
 }
 export const updatePost = (postData, id) =>{
     return async(dispatch)=>{
        try {
             dispatch({type: SET_LOADER});
             const {data:{message}} = await axiosInstance.post(`/update-post/${id}`, postData);
             dispatch({type: SET_SUCCESS_MESSAGE, payload: message});
        } catch (error) {
             const {errors} = error.response.data;
             dispatch({type: REMOVE_LOADER});
             dispatch({type: SET_ERRORS, payload: errors});
        }
     }
 }
 export const deletePost = (id) =>{
     return async(dispatch)=>{
        try {
             dispatch({type: SET_LOADER});
             const {data:{message}} = await axiosInstance.post(`/delete-post/${id}`);
             dispatch({type: SET_SUCCESS_MESSAGE, payload: message});
             dispatch({type: REMOVE_LOADER});
        } catch (error) {
             const {errors} = error.response.data;
             dispatch({type: REMOVE_LOADER});
             dispatch({type: SET_ERRORS, payload: errors});
        }
     }
 }

 export const createComment = (commentData) =>{
     return async(dispatch)=>{
        try {
             dispatch({type: SET_LOADER});
             const {data:{message}} = await axiosInstance.post(`/create-comment`, commentData);
             dispatch({type: SET_SUCCESS_MESSAGE, payload: message});
        } catch (error) {
             const {errors} = error.response.data;
             dispatch({type: REMOVE_LOADER});
             dispatch({type: SET_ERRORS, payload: errors});
        }
     }
 }