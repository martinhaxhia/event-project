import './App.css';
import { Routes, Route, Form } from 'react-router-dom';
import Navogation from './navigation/Navigation'
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Makina from './components/makina';
import Mbledhja from './components/mbledhja';
import Futboll from './components/futboll';
import Camera from './components/camera';
import Goal from './components/goal';
import Lista from './components/lista';
import MyForm from './components/form';
import Hook from './components/hook';
import Timer from './components/timer';
import Counter from './components/counter';
import UseRef from './components/useRef';
import Score from './components/useReducer';
import Example from './components/callBack';
import Shembulli from './components/useMemo';
function App() {
  return (

    <div>
      <Navogation/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contactus' element={<Contact/>}/>
        <Route path='/makina' element={<Makina color="kuqe"/>}/>
        <Route path='/mbledhja' element={<Mbledhja nr1={10} nr2={5}/>}/>
        <Route path='/futboll' element={<Futboll/>}/>
        <Route path='/camera' element={<Camera/>}/>
        <Route path='/goal' element={<Goal isGoal={true}/>}/>
        <Route path='/lista' element={<Lista/>}/>
        <Route path='/form' element={<MyForm/>}/>
        <Route path='/hook' element={<Hook/>}/>
        <Route path='/timer' element={<Timer/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/useRef' element={<UseRef/>}/>
        <Route path='/score' element={<Score/>}/>
        <Route path='/useCallback' element={<Example/>}/>
        <Route path='/useMemo' element={<Shembulli/>}/>
      </Routes> 
      </div>   
  );
}

export default App;
