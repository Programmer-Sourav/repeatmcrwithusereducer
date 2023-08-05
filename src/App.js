import logo from './logo.svg';
import './App.css';
import Home from './MCR1/pages/Home';
import Search from './MCR1/pages/Search';
import { Route, Routes } from 'react-router';
import HabitMain from './MCR2/pages/HabitMain';
import SnacksIndex from './MCR3/pages/SnacksIndex';
import Forum from './MCR4/pages/Forum';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path='/habitindex' element={<HabitMain/>}/>
        <Route path='/snacksindex' element={<SnacksIndex/>}/>
        <Route path='/forum' element={<Forum/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
