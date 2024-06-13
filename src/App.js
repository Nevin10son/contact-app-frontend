import logo from './logo.svg';
import './App.css';
import AddContacts from './components/AddContacts';
import SearchContact from './components/SearchContact';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddContacts/>}/>
      <Route path='/search' element={<SearchContact/>}/>
      <Route path='/view' element={<ViewAll/>}/>
      </Routes></BrowserRouter>
  );
}

export default App;
