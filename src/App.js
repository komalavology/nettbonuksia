import './App.css';
import "@fontsource/montserrat";
import "@fontsource/oswald"
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './containers';

function App() {

    return (
      <>
      <Routes>
        <Route path='/' element={<HomePage/>} />
      </Routes>

      </>
    );
}

export default App;
