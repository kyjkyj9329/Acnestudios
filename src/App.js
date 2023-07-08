import { Routes, Route, useSearchParams } from "react-router-dom";
import './App.css';
import ProductAll from "./Components/ProductAll";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar"
import { useState, useEffect } from "react";
import PrivateRouter from "./Components/PrivateRouter";
import { Footer } from "./Components/Footer";

function App() {
  const [authenticate, setAuthenticate] = useState(false);
  useEffect(() => {
    console.log('Login', authenticate);
  }, [authenticate])
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRouter authenticate={authenticate} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;