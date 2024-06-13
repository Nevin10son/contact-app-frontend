import logo from './logo.svg';
import './App.css';
import AddContacts from './components/AddContacts';
import SearchContact from './components/SearchContact';
import ViewAll from './components/ViewAll';

function App() {
  return (
    <div className="App">
      <AddContacts/>
      <SearchContact/>
      <ViewAll/>
    </div>
  );
}

export default App;
