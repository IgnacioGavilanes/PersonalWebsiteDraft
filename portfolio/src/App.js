import {Navbar} from './components/Navbar/Navbar';
import {Hero} from './components/Hero/Hero';
import {About} from './components/About/About';
import {Education} from './components/Education/Education';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
