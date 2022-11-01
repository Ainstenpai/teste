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

  function click(){
    document.getElementById('corpo').style.display="none"
    document.getElementById('mostratudo').style.display="block"
    
  }


  return (
    <>
      <header >
        <Navbar />
      </header>
      <main >
        <div id="corpo">   
          <Home/> 
          <MiddlePag/> 
          <Form/> 
          <AposForm/>
          <button className="enviar" onClick={click}> 
              ENVIAR 
          </button>
        </div>
        <div id="mostratudo">
          <div className="textMontserrat" id="titleForm">
            <div className="titleVacina">
              <h1 id="titleVacina">
                  Formulário enviado, aguarde nosso e-mail de confirmação
              </h1>
            </div>
          </div>
        </div>     
      </main>
    </>
  )

}