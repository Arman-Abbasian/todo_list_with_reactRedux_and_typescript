import React, {useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";



function App() {
  const dispatch = useDispatch();
  
  const pokemonState = useSelector((state) => state);


  console.log("pokemon state:", pokemonState);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
