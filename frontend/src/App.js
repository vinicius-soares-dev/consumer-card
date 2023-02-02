import React from 'react';


import './globalStyle.css';
import './signIn.css';

import api from './services/api';

import Login from './components/Login'



function App() {
  return (
    <div className='container'>

      <main>
        <h1>Consumer Card</h1>
        <p>Sistema de controle de gastos.</p>
        <form>
          <div className='signIn-block'>
            <Login />
          </div>
        </form>
      </main>

      <footer>
        <p>Desenvolvido por Vinicius Soares</p>
      </footer>

    </div>
  );
}

export default App;
