import logo from './logo.svg';
import './App.css';
import { Header } from './componentes/Header';
import { About } from './componentes/About';
import {Technologies} from './componentes/Technologies'
import { Experience } from './componentes/Experience';
import {Proyects} from './componentes/Proyects'
import { Footer } from './componentes/Footer';
import { LanguajeProvider } from './context/languajeState';

function App() {
  return (
    <LanguajeProvider>
      <main class='flex flex-col w-full justify-center'>
        <Header />
        <div class ='w-full flex flex-col place-items-center mt-5'>
          <About />
          <Technologies />
          <Experience />
          <Proyects />
          <Footer />
        </div>
      </main>
    </LanguajeProvider>
  );
}

export default App;
