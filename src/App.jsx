import React, { useState } from 'react';
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
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage';
import BookDetails from './Pages/BookDetails';

function App() {

  const [type, setType] = useState('horror');
  const [search, setSearch] = useState('');
  const genres = {
    fantasy,
    history,
    horror,
    romance,
    scifi
  };

  return (
    <>
      <Router>
        <MyNavbar search={search} setSearch={setSearch} />
        <Welcome />
        <Container>
          <GenreButtons setType={setType} />
        <Routes>
        <Route path="/" element={<AllTheBooks books={genres[type]} search={search} />} />
          <Route path='/detail/:asin' element={<BookDetails />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        </Container>
        <MyFooter />
      </Router>
    </>
  )
}

export default App;
