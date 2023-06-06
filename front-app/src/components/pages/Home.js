import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { fetchPosts } from "../../context/actions/PostAction";
import appContext from "../../context/appContext";

const Home = () =>{
  const { postState:{posts,loading}, postDispatch } = useContext(appContext);
  useEffect(()=>{
      fetchPosts(1)(postDispatch);
  },[]);
    return(
      <>
      <div className="hero-area">
        <div className="container">
          <div className="hero-content">
            <h1>Express js | Sequelize | MySql | React js</h1>
            <h2>with <b>(Context API + useReducer)</b> like Redux Simple app</h2>
            
          </div>
        </div>
      </div>
      <div className="single-post-area">
        <div className="container">
            {
              posts? posts.map((post)=>(
              <div key={post.id} className="single-post-content col-md-8 offset-md-2">
                  <NavLink to={`/post/${post.id}`}><h3>{ post.title }</h3>
                  <img width="100%" height="300px" src={`${post.image}`}/></NavLink>
                  <p>{ post.content.substring(0,100) }...</p>
              </div>
              )):''
            }
            <hr/>
        </div>
    </div>
    </>
    )
}
export default Home;