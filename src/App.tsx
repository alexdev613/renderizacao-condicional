import { useState } from 'react';
import './App.css';

function App() {
  const [signed, setSigned] = useState(false);

  const [signed2, setSigned2] = useState(false);

  const [input, setInput] = useState<string>("");
  const [username, setUsername] = useState("");


  function handleString() {
    setUsername(input);
    setInput('')
  }

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

      {/*---------------------------------------------------------------------------*/}

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

      {/*---------------------------------------------------------------------------*/}

      <br />


      <div>
        <h3>Terceiro exemplo (Renderização condicional com operador lógico AND '&&'):</h3>
        <br />
        
        <p>
          Teste com uma palavra menor que 8 caracteres e outra maior que esta condição,
          somente as que tem mais de 8 caracteres serão renderizadas!
        </p>
        <br />

        <label htmlFor="">Digite um nome: </label>
        <input
          type="text"
          placeholder='digite um nome'
          value={input}
          onChange={ (e) => setInput(e.target.value) }
         />
         <br /><br />

         <button onClick={handleString}>Enviar nome!</button>
         <br /><br />
          
          {username.length >= 8 && (
            <div>
              <h1>Username muito grande!</h1>
              <h2>Nome do usuário é: {username}</h2>
            </div>
          )}

      </div>

    </div>
  )
}

export default App
