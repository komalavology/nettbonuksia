import './App.css';
import "@fontsource/montserrat";
import "@fontsource/oswald"
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './containers';
import { AboutPage } from './containers/AboutPage';
import { TermsPage } from './containers/TermsPage';

function App() {

    return (
      <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/meistä' element={<AboutPage/>} />
        <Route path='/Käyttöehdot' element={<TermsPage/>} />
      </Routes>

      </>
    );
}

export default App;
