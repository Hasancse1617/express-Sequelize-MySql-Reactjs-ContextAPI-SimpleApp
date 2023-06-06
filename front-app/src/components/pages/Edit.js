import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editPost, updatePost } from "../../context/actions/PostAction";
import appContext from "../../context/appContext";
import toast, {Toaster} from "react-hot-toast";
import Loader from "../loader/Loader";
import { REMOVE_ERRORS } from "../../context/types/PostType";

const Edit = () =>{
    const navigate = useNavigate();
    const { id } = useParams();
    const { postState:{post,loading,message,errors}, postDispatch } = useContext(appContext);
    const [state, setState] = useState({
        title: "",
        image: "",
        content: ""
    });
    const handleInput = (e) =>{
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        updatePost(state,id)(postDispatch);
    }
    useEffect(()=>{
       editPost(id)(postDispatch);
    },[id]);

    useEffect(()=>{
        if(message){
            navigate("/posts?page=1");
        }
        if(errors && errors.length > 0){
            errors.map((error)=>{
                toast.error(error.msg);
            });
            postDispatch({type: REMOVE_ERRORS});
        }
    },[errors,message]);

    useEffect(()=>{
        if(post){
           setState({
               title: post.title,
               image: post.image,
               content: post.content
           });
        }
    },[post]);
    return !loading?(
        <div className="create-post-area">
            <Toaster position="top-right" reverseOrder={true}/>
            <div className="container">
                <div className="create-post-content col-md-8 offset-md-2">
                    <h3>Edit Post</h3>
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="form-group col-md-6">
                            <label for="inputAddress2">Post title</label>
                            <input type="text" onChange={handleInput} name="title" value={state.title} className="form-control" id="inputEmail4"/>
                            </div>
                            <div className="form-group col-md-6">
                            <label for="inputAddress2">Post thumbnail link</label>
                            <input type="text" onChange={handleInput} name="image" value={state.image} className="form-control" id="inputPassword4"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputAddress2">Post Content</label>
                            <textarea className="form-control" onChange={handleInput} name="content" value={state.content} id="inputAddress" rows="4"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Update</button>
                    </form>
                </div>
            </div>
        </div>
    ):<Loader/>
}
export default Edit;