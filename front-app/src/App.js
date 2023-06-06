import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Provider from "./context/Provider";

function App() {
  // console.log("postState.posts");
  return (
    <> 
        <BrowserRouter>
          <Header/>
          <Provider>
          <Router/>
          </Provider>
          <Footer/>
        </BrowserRouter>

    </>
  );
}

export default App;
