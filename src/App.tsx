import { useState } from 'react';
import './App.css';

function App() {
  const [signed, setSigned] = useState(false);

  const [signed2, setSigned2] = useState(false);

  return (
    <div>
      <h1>Olá mundo</h1>
      <br /><br />

      {/* Renderização condicional com Operador Condicional Ternário: */}
      <hr />
      <h3>Primeiro exemplo (Renderização condicional com Operador Condicional Ternário):</h3>
      <br />

      {signed ? (
        <div>
          <h1>Bem vindo Alex José</h1>
          <button onClick={ () => setSigned(false) }>Fazer Logout</button>
        </div>
      ) : (
        <h1>Nenhum usuário online</h1>
      )}
      <br /><br />

      <button onClick={ () => setSigned(true) }>Logar usuário</button>

      <br /><br />
      <hr />

      <h3>Segungo exemplo (Renderização condicional com operador lógico AND '&&'):</h3>
      <br />

      {/* Só vai ser renderizado se signed2 = true */}
      <button onClick={ () => setSigned2(true) }>Clique para Logar</button>
      <br /><br />
      {signed2 && (
        <div>
          <h1>Bem vindo Alex Nascimento!</h1>
          <br />
          <p>Usuário online!</p>
          <br />
          <button onClick={ () => setSigned2(false) }>Fazer Logout</button>
        </div>
      )}
      <br />
      <hr />
    </div>
  )
}

export default App
