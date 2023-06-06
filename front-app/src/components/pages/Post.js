import moment from "moment";
import { useContext, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { NavLink, useSearchParams } from "react-router-dom";
import Swal from 'sweetalert2';
import { deletePost, fetchPosts } from "../../context/actions/PostAction";
import appContext from "../../context/appContext";
import { REMOVE_SUCCESS_MESSAGE } from "../../context/types/PostType";
import Loader from "../loader/Loader";
import Pagination from "../pagination/Pagination";

const Post = () =>{
    const [searchParams] = useSearchParams();
    const page = searchParams.get("page");
    const { postState:{posts,loading,message,perPage, count, pageLink}, postDispatch } = useContext(appContext);
    useEffect(()=>{
        //function in function parameter pass
        fetchPosts(page)(postDispatch);
    },[page]);
    useEffect(()=>{
        if(message){
            toast.success(message);
            postDispatch({type: REMOVE_SUCCESS_MESSAGE});
            fetchPosts(page)(postDispatch);
        }
    },[message]);

    const deleteAction = (id) =>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
              deletePost(id)(postDispatch);
            }
        })
    }

    return !loading?(
        <div className="post-list-area">
            <Toaster position="top-right" reverseOrder={true}/>
            <div className="container">
                <div className="post-list-content">
                    <h3>Post List</h3>
                    
                    <table className="table" style={{width:'100%'}}>
                        <thead>
                        <tr>
                            <th style={{paddingLeft:'70px',width:'50%'}}>Post</th>
                            <th style={{width:'25%'}}>Date</th>
                            <th style={{width:'25%'}}>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                           posts? posts.map((post)=>(
                                <tr key={post.id}>
                                    <td style={{paddingLeft:'95px'}}><NavLink title="Click here to go single post" to={`/post/${post.id}`}><img width="50" height="50" src={`${post.image}`}/>{ post.title }</NavLink></td>
                                    <td>{ moment().format('MMMM Do YYYY', post.createdAt) }</td>
                                    <td>
                                        <NavLink to={`/edit/${post.id}`} title="Edit"><i className="fa-regular fa-pen-to-square"></i></NavLink>
                                        <a href="#" title="Delete" onClick={()=>deleteAction(post.id)}><i className="fa-solid fa-trash-can"></i></a>
                                    </td>
                                </tr>
                            )):''
                        }
                        </tbody>
                        <tfoot></tfoot>
                    </table>
                     <Pagination page={page} perPage={perPage} count={count} pageLink={pageLink} />
                </div>
            </div>
        </div>
    ):<Loader/>
}
export default Post;