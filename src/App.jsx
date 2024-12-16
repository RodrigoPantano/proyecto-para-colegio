import './App.css'
import Domingo from './components/Domingo';
import Lunes from './components/Lunes'
import Martes from './components/Martes';
import Miercoles from './components/Miercoles';
import Jueves from './components/Jueves';
import Viernes from './components/Viernes';
import Sabado from './components/Sabado';
import logo from './assets/logo_miles3.png';

function App() {
  const today = new Date();
  const dayOfWeek = today.getDay();

  const components = {
    0: <Domingo />,
    1: <Lunes />,
    2: <Martes />,
    3: <Miercoles />,
    4: <Jueves />,
    5: <Viernes />,
    6: <Sabado />
  };

  return (
    <>
      <img className='w-20 h-20 sm:w-32 sm:h-32 m-auto sm:mb-10' src={logo}/>
      <div className='text-center sm:text-start'>
        <h1 className='text-3xl '>Modo práctico de rezar el Santo Rosario</h1>
        <main className='text-sm text-start flex flex-col gap-y-1 sm:gap-y-4 my-5'>
          <p className='flex-auto mt-2 p-4 rounded-xl bg-stone-900'>
            U: Por la señal de la Santa Cruz, de nuestros enemigos, líbranos, Señor, Dios Nuestro. <br />
            En el nombre del Padre, y del Hijo, y del Espíritu Santo. Amén. <br />
            Acto de contrición: Pésame, Dios mío, y me arrepiento de todo corazón de haberos ofendido. Pésame por el infierno que merecí y por el
            cielo que perdí; pero mucho más me pesa porque pecando ofendí a un Dios tan bueno y tan grande como Vos. Antes querría haber muerto que
            haberos ofendido; y propongo firmemente no pecar más y evitar todas las ocasiones próximas de pecado. Amén. <br />
            Gloria al Padre, y al Hijo, y al Espíritu Santo. <br />
            T: Como era en un principio, ahora y siempre, y por los siglos de los siglos. Amén.
          </p>
          <div className='flex-auto'>{components[dayOfWeek]}</div>
          <p className='flex-auto mt-2 p-4 rounded-xl bg-stone-900'>
            U: Recemos por las intenciones del Sumo Pontífice, para ganar las santas Indulgencias. <br />
            (Padrenuestro, 3 Avemarías y 1 Gloria) <br /> <br/>
            El Rosario goza de Indulgencia Plenaria si se reza en una iglesia, o en familia, o en una comunidad religiosa o asociación de piedad. <br />
            Conviene finalizar rezando las <a className='text-sky-500 underline' href="https://www.vatican.va/special/rosary/documents/litanie-lauretane_sp.html">letanías de la Santísima Virgen</a>.
          </p>
          
        </main>
      </div>
    </>
  )
}

export default App
