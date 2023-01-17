import React, { useState } from 'react';
import './App.css';
import logado from './imagens/login.png';
import logout from './imagens/logout.png';

function App() {

  const [login, setLogin] = useState(true);

  function handleLogin() {
    setLogin(!login);
  }

  return (
      <div id="Login-container">
        {
          login ? 
          <div id="login">
            <h2>Bem-vindo Ludmila!</h2>
            <img src={logado} alt="Login efetuado com sucesso"/>
            <button onClick={handleLogin}>Sair</button>
          </div>
         : 
        <div id="login">
          <h2>Faça o login para entrar no sistema.</h2>
          <img src={logout} alt="Logout efetuado com sucesso"/>
          <button onClick={handleLogin}>Entrar</button>
         </div>
       }
      </div>
  )
}
export default App;

