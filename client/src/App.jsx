import React from "react";
import style from './App.modules.scss';
import {Route, Routes} from "react-router-dom";

import Login from "./Components/Login";
import Register from "./Components/Register";

export const App = () => {
  return (
    <div className={style.App}>
     <Routes>
      <Route path="/" element={<Register />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/login" element={<Login/>} />
     </Routes>
    </div>
  );
}

export default App;
