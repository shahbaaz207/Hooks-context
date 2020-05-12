import React from 'react';
import './App.css';
import BookContextProvider from './Context/BookContext';
import Navbar from './Components/Navbar';
import BookList from './Components/BookList';
import BookForm from './Components/BookForm';

function App() {
  return (
    <div className="App">
     <BookContextProvider>
       <Navbar/>
       <BookForm/>
       <BookList/>
     </BookContextProvider>
    </div>
  );
}

export default App;
