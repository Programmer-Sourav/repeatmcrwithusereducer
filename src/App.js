import logo from './logo.svg';
import './App.css';
import Home from './MCR1/pages/Home';
import Search from './MCR1/pages/Search';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
    
    </div>
  );
}

export default App;
