import './App.css';
// import {useState, useEffect} from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./Components/pages/Home/Home";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Tea from "./Components/pages/Tea/Index"


function App() {

  return (
        <>
            <Header/>

              <Routes>
                 <Route path="/" element = {<Home/>} />
                  <Route path="/the" element = {<Tea/>} />
                {/* <Route path="notre-histoire" element={<About />}/>
                  <Route path="connexion" element={<EntryUser />}/>  */}
              </Routes>

            <Footer/>
        </>
  );
}

export default App;
