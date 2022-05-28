import { Routes, Route } from "react-router-dom";
import Create from "../components/pages/Create";
import Detail from "../components/pages/Detail";
import Edit from "../components/pages/Edit";
import Home from "../components/pages/Home";
import Post from "../components/pages/Post";

const Router = () =>{
    return(
        <>
           <Routes>
             <Route path="/" element={<Home/>}></Route>
             <Route path="/posts" element={<Post/>}></Route>
             <Route path="/create" element={<Create/>}></Route>
             <Route path="/edit/:id" element={<Edit/>}></Route>
             <Route path="/post/:id" element={<Detail/>}></Route>
           </Routes>
        </>
    );
}
export default Router;