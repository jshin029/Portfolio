import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Timeline from './components/Timeline/Timeline';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Projects />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;
