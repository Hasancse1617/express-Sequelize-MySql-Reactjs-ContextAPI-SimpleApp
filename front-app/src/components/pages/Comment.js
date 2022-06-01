import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createComment, fetchComments } from "../../context/actions/PostAction";
import appContext from "../../context/appContext";
import toast, {Toaster} from "react-hot-toast";
import { REMOVE_ERRORS, REMOVE_POST_COMMENT } from "../../context/types/PostType";

const Comment = () =>{
    const { id } = useParams();
    const { postState:{loading,errors,comments}, postDispatch } = useContext(appContext);
    const [state, setState] = useState({
        comment:""
    });
    const handleSubmit = (e) =>{
        e.preventDefault();
        createComment(state,id)(postDispatch);
        setState({comment:""});
    }
    useEffect(()=>{
        if(errors && errors.length > 0){
            errors.map((error)=>{
                toast.error(error.msg);
            });
            postDispatch({type: REMOVE_ERRORS});
        }
    },[errors]);
    useEffect(()=>{
        fetchComments(id)(postDispatch);
        return()=>{
            postDispatch({type: REMOVE_POST_COMMENT});
        }
    },[]);

    return(
        <>
           <form onSubmit={handleSubmit}>
           <Toaster position="top-right" reverseOrder={true}/>
                <div className="form-group">
                    <textarea value={state.comment} onChange={(e)=>setState({...state,comment:e.target.value})} name="comment" className="form-control" id="inputAddress" placeholder="Add comment" rows="2"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
            <hr/>
            <h4>Comments ({comments?comments.length:''})</h4>
            {comments? comments.map((comment)=>(
            <div className="single-comment">
                <span className="img"><img width="50" height="50" src="/images/download.jpg"/></span><span className="p"><p>{ comment.comment }</p></span>
              </div>
            )):''}
            
        </>
    );
}
export default Comment;