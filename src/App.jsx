import './App.scss';
import Home from './components/page/home/Home';
import About from './components/page/about/About';




export const App = () => { 
  return (
    <div className="App">
      <Home/>
      <About/>
    </div>
  );
}

export default App;
