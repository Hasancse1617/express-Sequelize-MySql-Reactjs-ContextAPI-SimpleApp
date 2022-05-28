import { NavLink } from "react-router-dom";

const Post = () =>{
    return(
        <div class="post-list-area">
            <div class="container">
                <div class="post-list-content">
                    <h3>Post List</h3>
                    <table class="table" style={{width:'100%'}}>
                        <thead>
                        <tr>
                            <th style={{paddingLeft:'70px',width:'50%'}}>Post</th>
                            <th style={{width:'25%'}}>Date</th>
                            <th style={{width:'25%'}}>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td style={{paddingLeft:'95px'}}><NavLink to="/post/111"><img width="50" height="50" src="/images/download.jpg"/> It was very hot day</NavLink></td>
                            <td>07-10-2022</td>
                            <td>
                                <a href="#" title="Delete"><i class="fa-solid fa-trash-can"></i></a>
                                <NavLink to="/edit/1111" title="Edit"><i class="fa-regular fa-pen-to-square"></i></NavLink>
                            </td>
                        </tr>
                        <tr>
                        {/* <img width="50" height="50" src="/images/download.jpg"/> */}
                            <td style={{paddingLeft:'95px'}}><NavLink to="/post/111"><img width="50" height="50" src="/images/download.jpg"/> It was very hot day</NavLink></td>
                            <td>07-10-2022</td>
                            <td>
                                <a href="#" title="Delete"><i class="fa-solid fa-trash-can"></i></a>
                                <NavLink to="/edit/1111" title="Edit"><i class="fa-regular fa-pen-to-square"></i></NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td style={{paddingLeft:'95px'}}><NavLink to="/post/111"><img width="50" height="50" src="/images/download.jpg"/> It was very hot day</NavLink></td>
                            <td>07-10-2022</td>
                            <td>
                                <a href="#" title="Delete"><i class="fa-solid fa-trash-can"></i></a>
                                <NavLink to="/edit/1111" title="Edit"><i class="fa-regular fa-pen-to-square"></i></NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td style={{paddingLeft:'95px'}}><NavLink to="/post/111"><img width="50" height="50" src="/images/download.jpg"/> It was very hot day</NavLink></td>
                            <td>07-10-2022</td>
                            <td>
                                <a href="#" title="Delete"><i class="fa-solid fa-trash-can"></i></a>
                                <NavLink to="/edit/1111" title="Edit"><i class="fa-regular fa-pen-to-square"></i></NavLink>
                            </td>
                        </tr>
                        <tr>
                            <td style={{paddingLeft:'95px'}}><NavLink to="/post/111"><img width="50" height="50" src="/images/download.jpg"/> It was very hot day</NavLink></td>
                            <td>07-10-2022</td>
                            <td>
                                <a href="#" title="Delete"><i class="fa-solid fa-trash-can"></i></a>
                                <NavLink to="/edit/1111" title="Edit"><i class="fa-regular fa-pen-to-square"></i></NavLink>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default Post;