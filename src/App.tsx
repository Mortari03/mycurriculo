import React from 'react';
import Home from './componentes/Home';
import WorkExperience from './componentes/trabalho';
import { Route, Routes } from 'react-router-dom';
import Trabalho from './componentes/trabalho';
import Cursos from './componentes/cursos';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />

        <Route
          path='/trabalho'
          element={<Trabalho />}
        />

        <Route
          path='/cursos'
          element={<Cursos />}
        />
         </Routes>
    </div>
  );
}

export default App;
