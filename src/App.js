import logo from './logo.svg';
import './App.css'; 
import Siteheader from './Components/SiteHeader/Siteheader.js';
import AboutMe from './Components/AboutMe/AboutMe.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">

          <Siteheader />
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<AboutMe />} />
                  
              </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
