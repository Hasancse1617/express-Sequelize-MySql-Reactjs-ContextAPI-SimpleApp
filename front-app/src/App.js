import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

function App() {
  return (
    <> 
      <BrowserRouter>
        <Header/>
        <Router/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
