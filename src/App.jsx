import './App.scss';
import Home from './components/page/home/Home';
import About from './components/page/about/About';
import Service from './components/page/service/Service';
import Portfolio from './components/page/portfolio/Portfolio';




const App = () => { 
  return (
    <div className="App">
      <Home/>
      <About/>
      <Service/>
      <Portfolio/>
    </div>
  );
}

export default App;
