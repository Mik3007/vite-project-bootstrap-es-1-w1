import React, {useState} from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import AllTheBooks from './components/AllTheBooks';
import horror from './books/horror.json';
import fantasy from './books/fantasy.json';
import history from './books/history.json';
import romance from './books/romance.json';
import scifi from './books/scifi.json';
import MyFooter from './components/MyFooter'
import Welcome from './components/Welcome';
import GenreButtons from './components/Button';
import { ThemeContext } from './modules/Contexts';
import { Container } from 'react-bootstrap';

function App() {

  const [type, setType] = useState ('horror');
  const [search, setSearch] = useState('');
  const [theme, setTheme] = useState('light');

  return (
    <>
    <ThemeContext.Provider value ={[theme, setTheme]}>
      <MyNavbar search={search} setSearch={setSearch} />
      <Welcome/>
      <Container>
      <GenreButtons setType={setType} />
      {type === 'fantasy' && <AllTheBooks books={fantasy} search={search}/>}
      {type === 'history' && <AllTheBooks books={history} search={search}/>}
      {type === 'horror' && <AllTheBooks books={horror} search={search}/>}
      {type === 'romance' && <AllTheBooks books={romance} search={search}/>}
      {type === 'scifi' && <AllTheBooks books={scifi} search={search}/>}
      </Container>
      <MyFooter/>
    </ThemeContext.Provider>
    </>
  )
}

export default App;
