import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { editPost } from "../../context/actions/PostAction";
import appContext from "../../context/appContext";
import Loader from "../loader/Loader";
import Comment from "./Comment";

const Detail = () =>{
    const { id } = useParams();
    const { postState:{post,loading}, postDispatch } = useContext(appContext);
    useEffect(()=>{
        editPost(id)(postDispatch);
     },[id]);

    return !loading && typeof post == 'object'?(
        <div className="single-post-area">
            <div className="container">
                <div className="single-post-content col-md-8 offset-md-2">
                    <h3>{ post.title }</h3>
                    <img width="100%" height="300px" src={`${post.image}`}/>
                    <p>{ post.content }</p>
                    
                    <Comment/>
                </div>
            </div>
        </div>
    ):<Loader/>
}
export default Detail;