import './App.scss';
import Home from './components/page/home/Home';
import About from './components/page/about/About';
import Service from './components/page/service/Service';
import Portfolio from './components/page/portfolio/Portfolio';
import Contact from './components/page/contact/Contact';




const App = () => { 
  return (
    <div className="App">
      <Home/>
      <About/>
      <Service/>
      <Portfolio/>
      <Contact/>
    </div>
  );
}

export default App;
