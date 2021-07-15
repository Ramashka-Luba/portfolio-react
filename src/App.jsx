import './App.scss';
import Home from './components/page/home/Home';
import About from './components/page/about/About';
import Home2 from './components/page/home/home2/Home2';
import Home3 from './components/page/home/home3/Home3';


export const App = () => { 
  return (
    <div className="App">
      {/* <Home/> */}
      
      <Home2/>
      {/* <About/> */}
      {/* <Home3/> */}
    </div>
  );
}

export default App;
