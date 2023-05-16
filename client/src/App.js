import {  useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import AuthorForm from './components/AuthorForm';
import EditAuthor from './components/EditAuthor';
function App() {
  const [authors, setAuthors] = useState([])
  return (
    <div className="d-flex flex-column align-items-center m-5">
      <BrowserRouter>
          <Routes>
            <Route element={<Main authors={authors} setAuthors={setAuthors}/>} path="/" />
            <Route element={<AuthorForm authors={authors} setAuthors={setAuthors}/>} path="/new" />
            <Route element={<EditAuthor authors={authors} setAuthors={setAuthors}/>} path="/edit/:id" />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
