import { useState } from 'react';
import './App.css';

function App() {
  const [signed, setSigned] = useState(false);

  return (
    <div>
      <h1>Olá mundo</h1>
      <br /><br />

      {/* Renderização condicional com Operador Condicional Ternário: */}

      {signed ? (
        <div>
          <h1>Bem vindo Alex José</h1> <br />
          <button onClick={ () => setSigned(false) }>Fazer Logout</button>
        </div>
      ) : (
        <h1>Nenhum usuário online</h1>
      )}
      <br /><br />

      <button onClick={ () => setSigned(true) }>Logar usuário</button>

      <br /><br />
      <hr />
    </div>
  )
}

export default App
