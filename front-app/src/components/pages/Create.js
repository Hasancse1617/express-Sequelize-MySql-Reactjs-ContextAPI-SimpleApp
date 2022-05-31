import { useContext, useEffect, useState } from "react";
import { createPost } from "../../context/actions/PostAction";
import appContext from "../../context/appContext";
import { useNavigate } from "react-router-dom";
import toast, {Toaster} from "react-hot-toast";
import { REMOVE_ERRORS } from "../../context/types/PostType";

const Create = () =>{
    const navigate = useNavigate();
    const { postState:{errors,message}, postDispatch } = useContext(appContext);
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
        createPost(state)(postDispatch);
    }
    useEffect(()=>{
        if(message){
            navigate("/posts");
        }
        if(errors && errors.length > 0){
            errors.map((error)=>{
                toast.error(error.msg);
            });
            postDispatch({type: REMOVE_ERRORS});
        }
    },[errors,message]);

    return(
        <div className="create-post-area">
            <Toaster position="top-right" reverseOrder={true}/>
            <div className="container">
                <div className="create-post-content col-md-8 offset-md-2">
                    <h3>Create Post</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="form-group col-md-6">
                            <label htmlFor="inputAddress2">Post title</label>
                            <input type="text" onChange={handleInput} name="title" className="form-control" id="inputEmail4"/>
                            </div>
                            <div className="form-group col-md-6">
                            <label htmlFor="inputAddress2">Post thumbnail link</label>
                            <input type="text" onChange={handleInput} name="image" className="form-control" id="inputPassword4"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress2">Post Content</label>
                            <textarea className="form-control" onChange={handleInput} name="content" id="inputAddress" rows="4"></textarea>
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Sign in</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default Create;