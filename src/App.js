import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter as Router,  Route, Routes } from "react-router-dom";
import { Home } from './pages/Home';
import Signin from './pages/Signin';
import Joinus from './pages/Joinus';
import Joinus1 from './pages/Joinus1';
import Joinus2 from './pages/Joinus2';
import Overlayout from "./pages/layout";
import Settinglayout from './pages/Settinglayout';
import ForgotPassword from './pages/Forgetpassword';

function App() {
  return (
   <>
      <Router>

        <div className="pages">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Signin" element={<Signin />} />
              <Route path="/Joinus" element={<Joinus />} />
              <Route path="/Joinus1" element={<Joinus1 />} />
              <Route path="/Joinus2" element={<Joinus2 />} />
              <Route path="/Overlayout" element={<Overlayout/>}/>
              <Route path="/Settinglayout" element={<Settinglayout/>}/>
              <Route path="/ForgotPassword" element={<ForgotPassword/>}/>

          </Routes>
          </div>

      </Router>
      </> 
  );
}

export default App;