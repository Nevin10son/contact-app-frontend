import logo from './logo.svg';
import './App.css';
import AddContacts from './components/AddContacts';
import SearchContact from './components/SearchContact';

function App() {
  return (
    <div className="App">
      <AddContacts/>
      <SearchContact/>
    </div>
  );
}

export default App;
