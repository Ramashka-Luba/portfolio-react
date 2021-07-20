import './App.scss';
import Home from './components/page/home/Home';
import About from './components/page/about/About';
import Service from './components/page/service/Service';




export const App = () => { 
  return (
    <div className="App">
      <Home/>
      <About/>
      <Service/>
    </div>
  );
}

export default App;
