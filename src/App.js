import logo from './logo.svg';
import './App.css';
import Home from './MCR1/pages/Home';
import Search from './MCR1/pages/Search';
import { Route, Routes } from 'react-router';
import HabitMain from './MCR2/pages/HabitMain';
import SnacksIndex from './MCR3/pages/SnacksIndex';
import Forum from './MCR4/pages/Forum';
import ReceipeHome from './MCR5/pages/ReceipeHome';
import ReceipeDetails from './MCR5/components/ReceipeDetails';
import ReceipeDisplay from './MCR5/contexts/ReceipeDisplay';
import Checkboxpractice from './Checkbox/pages/Checkboxpractice';
import Practice1 from './Practice1';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path='/habitindex' element={<HabitMain/>}/>
        <Route path='/snacksindex' element={<SnacksIndex/>}/>
        <Route path='/forum' element={<Forum/>}/>
        <Route path='/receipehome' element={<ReceipeHome/>}/>
        <Route path='/receipe-details/:id' element={<ReceipeDisplay/>}/>
        <Route path='/checkbox' element={<Checkboxpractice/>}/>
      </Routes>
     <Practice1/>
    </div>
  );
}

export default App;
