import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Videos from "./Components/Videos/Videos";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
