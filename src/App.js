import './App.css';
import "@fontsource/montserrat";
import "@fontsource/oswald"
import { RouterProvider} from 'react-router-dom';
import AOS from 'aos'
import { useState, useEffect } from 'react';
import Loader from "./components/Loader";
import { router } from "./utils/routes";
import {HelmetProvider } from "react-helmet-async";
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
      <HelmetProvider>
      <RouterProvider basename="/nettbonuksia" router={router} />
      </HelmetProvider>
      </>
    );
}
}
export default App;
