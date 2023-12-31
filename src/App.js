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
import Practice2 from './Practice2';
import PracticeInput from './Basics/PracticeInput';
import CountDownTimer from './Basics/CountDownTimer';
import CountDownTimer2 from './Basics/CountDownTimer2';
import AddRemoveInList from './Basics/AddRemoveInList';
import Practice from './Basics/Practice';
import TabComponent from './TabsA3/TabComponent';
import GroceryList from './Q2A3/GroceryList';
import Chatwindow from './Q5A3/Chatwindow';
import TweetScreen from './Q6A3/TweetScreen';
import MovieSelection from './Q7A3/MoviesSelection';

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
        <Route path='/practice-basics' element={<PracticeInput/>}/>
        <Route path='/countdowntimer' element={<CountDownTimer/>}/>
        <Route path='/countdowntimertwo' element={<CountDownTimer2/>}/>
        <Route path='/addremove' element={<AddRemoveInList/>}/>
        <Route path='/basicreact' element={<Practice/>}/>
      </Routes>
     <Practice1/>
     <Practice2/>
     <TabComponent/>
     <GroceryList/>
     <Chatwindow/>
     <TweetScreen/>
     <MovieSelection/>
    </div>
  );
}

export default App;
