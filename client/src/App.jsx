import './App.css';
// import {useState, useEffect} from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./Components/pages/Home/Index";
import Header from './Components/pages/Header/Header';
import Footer from './Components/pages/Footer/Index';
import Tea from "./Components/pages/Tea/Index";
import About from "./Components/pages/About/index"; 
import Dashboard from "./Components/pages/user/Dashboard";
import Signup from "./Components/pages/user/Signup";
import Signout from "./Components/pages/user/Signout";
import Signin from "./Components/pages/user/Signin";
import HOC from "./Components/HOC/index";
import Detail from "./Components/pages/Details/index";


function App() {

  return (
        <>
            <Header/>

              <Routes>
                 <Route path="/" element = {<HOC child = {Home} /> } />
                  <Route path="/the" element = {<HOC child={Tea}/> } />
                  <Route path="/notre-histoire" element={<HOC child={About}/> } />
                   <Route path="/produit" element={<HOC child={Detail}/> } />                 
                  <Route path="/utilisateur">
                    <Route path="connexion" element = { <HOC child={Signin} />} />
                    <Route path="dashboard" element = {<HOC child= {Dashboard} auth={true} /> } />
                    <Route path ="creer-un-compte" element={< HOC child ={Signup}/> } />
                    <Route path = "deconnexion" element= { <HOC child ={Signout}/>} />
                  </Route>
                
              </Routes>

            <Footer/>
        </>
  );
}

export default App;
