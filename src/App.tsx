import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from 'features/counter/Counter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={(<Counter />)} />
          <Route element={(<div>Miss</div>)} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
