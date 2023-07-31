import React from 'react';
import {ShowTodo} from "./components/showTodo";
import CreateTodo from './components/createTodo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
      <BrowserRouter>
       <Routes>
        <Route path="/" element={<ShowTodo />}/>
        <Route path="/create-todo" element={<CreateTodo />}/>
       </Routes>
      </BrowserRouter>
  );
}

export default App;
