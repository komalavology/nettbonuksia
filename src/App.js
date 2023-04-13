import './App.css';
import "@fontsource/montserrat";
import "@fontsource/oswald"
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './containers';
import { AboutPage } from './containers/AboutPage';
import { TermsPage } from './containers/TermsPage';

import AOS from 'aos'
import { useState, useEffect } from 'react';
import Loader from "./components/Loader";
import { PrivacyPage } from './containers/PrivacyPage';

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
        <Route path='/meistä' element={<AboutPage/>} />
        <Route path='/Käyttöehdot' element={<TermsPage/>} />
        <Route path='/Tietosuojakäytäntö' element={<PrivacyPage/>} />
      </Routes>

      </>
    );
}
}
export default App;
