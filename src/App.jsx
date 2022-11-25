import './App.css';
import { Footer } from './components/footer/Footer';
import { Navbar } from './components/navbar/Navbar';
import { Landing } from './pages/landing/Landing';

function App() {
  return (
    <>
      <Navbar/>
      <Landing/>
      <Footer/>
    </>
  );
}

export default App;