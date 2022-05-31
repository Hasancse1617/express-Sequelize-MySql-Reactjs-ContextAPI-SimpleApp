import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { createComment } from "../../context/actions/PostAction";
import appContext from "../../context/appContext";

const Comment = () =>{
    const { id } = useParams();
    const { postState:{loading}, postDispatch } = useContext(appContext);
    const [state, setState] = useState({
        comment:""
    });
    const handleSubmit = (e) =>{
        e.preventDefault();
        createComment(state)(postDispatch);
        setState({comment:""});
    }
    return(
        <>
           <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <textarea value={state.comment} onChange={(e)=>setState({...state,comment:e.target.value})} name="comment" className="form-control" id="inputAddress" placeholder="Add comment" rows="2"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Sign in</button>
            </form>
            <hr/>
            <h4>Comments (05)</h4>
            <div className="single-comment">
                <span className="img"><img width="50" height="50" src="/images/download.jpg"/></span><span className="p"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></span>
            </div>
            <div className="single-comment">
                <span className="img"><img width="50" height="50" src="/images/download.jpg"/></span><span className="p"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></span>
            </div>
            <div className="single-comment">
                <span className="img"><img width="50" height="50" src="/images/download.jpg"/></span><span className="p"><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p></span>
            </div>
        </>
    );
}
export default Comment;