import './App.css';
import SignInOutConatiner from './components/container/SignInOutConatiner';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter } from "react-router-dom";
import { Route, Routes, useLocation } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      <SignInOutConatiner />
    </div>
  );
}

export default App;
