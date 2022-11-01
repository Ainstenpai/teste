import React from "react";
import './App.js';
import'./App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Navbar from './componentsPag/NavBar/Navbar';
import Home from "./componentsPag/Home/Home.js";
import MiddlePag from "./componentsPag/MiddlePagr/MiddlePag";
import Form from "./componentsPag/Form/Form.js";
import AposForm from "./componentsPag/AposForm/AposForm";
import FimForm from "./componentsPag/FimForm/FimForm";
import './Form.css';


export default function App(){
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />}/>
        </Routes>
        <Routes>
          <Route  path="/MiddlePag" element={<MiddlePag />}/>
        </Routes>
        <Routes>
          <Route path="/Form" element={<Form />}/>
        </Routes>
        <Routes>
          <Route path="/AposForm" element={<AposForm />}/>
        </Routes>
        <Routes>
          <Route exact path="/FimForm" element={<FimForm />}/>
        </Routes> 
      </main>
    </>
  )

}