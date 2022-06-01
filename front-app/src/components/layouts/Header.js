import { NavLink } from "react-router-dom";

const Header = () =>{
    return(
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">NEWS</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/posts" className="nav-link">Post List</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/create">Create Post</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
}
export default Header;