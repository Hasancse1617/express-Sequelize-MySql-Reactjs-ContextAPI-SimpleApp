import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
        <div class="container">
          <a class="navbar-brand" href="#">CRUD</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">All Posts</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Create Post</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="hero-area">
        <div class="container mt-3">
          <h3>Navbar With Dropdown</h3>
          <p>This example adds a dropdown menu in the navbar.</p>
        </div>
      </div>
      <footer class="footer-area">
          <div class="container">
              <div class="row">
                  <div class="col-md-6">

                  </div>
                  <div class="col-md-6">

                  </div>
              </div>
          </div>
      </footer>
      
    </>
  );
}

export default App;
