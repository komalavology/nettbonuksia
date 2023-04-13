import './App.css';
import "@fontsource/montserrat";
import "@fontsource/oswald"
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './containers';
import AOS from 'aos'
import { useState, useEffect } from 'react';
import Loader from "./components/Loader";

function App() {

   const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  window.addEventListener('load', AOS.refreshHard);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return <Loader />
  } else {
    return (
      <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>

      </>
    );
}
}
export default App;
