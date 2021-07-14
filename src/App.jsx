import './App.scss';
import Home from './components/page/home/Home';
import About from './components/page/about/About';
import Home2 from './components/page/home/home2/Home2';


export const App = () => { 
  return (
    <div className="App">
      {/* <Home/> */}
      {/* <About/> */}
      <Home2/>
    </div>
  );
}

export default App;
