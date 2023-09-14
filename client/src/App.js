import './App.css';
// import {useState, useEffect} from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import Header from './Components/Header';
import Footer from './Components/Footer';


function App() {

//   const [datas, setDatas] = useState(null)

//   useEffect(()=>{
//     async function getData(){
//      try {
//       const result = await  ( await fetch ("http://localhost:9000")).json()
//       setDatas(result.data);
//       console.log(result);
//      } catch (error) {
//       console.log(error)
      
//      }
//     }
//     getData();
//   },[]);



  return (
        <>
            <Header/>

              <Routes>
                 <Route path="/" element = {<Home/>} /> 
              </Routes>



            <Footer/>
        </>
  );
}

export default App;
