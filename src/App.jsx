import s from './App.module.scss';
import Home from './components/page/home/Home';


export const App = () => { 
  return (
    <div className={s.App}>
      <Home/>
    </div>
  );
}

export default App;
