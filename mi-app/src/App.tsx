import { ContadorRed } from './components/ContadorRed';
import { Counter } from './components/Counter';
import { Formulario } from './components/Formulario';
import { TimerPadre } from './components/TimerPadre';
import { Usuario } from './components/Usuario';

function App() {
  return (
    <>
      <h1> React + TypeScript</h1>
      <hr/>
      <Counter />
      <Usuario />

    <h2>useEfect - useRef</h2>
    <hr/>
      <TimerPadre/>
    <hr/>
    <h2>UseReducer</h2>
    <ContadorRed />

    <h2>customHooks</h2>
    <hr/>
    <Formulario/>
    <br/>
    <br/>
    <br/>
    <br/>
    </>

    );
}

export default App;
