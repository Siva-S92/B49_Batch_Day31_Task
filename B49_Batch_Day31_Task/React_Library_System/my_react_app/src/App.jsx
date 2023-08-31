// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import AddAuthor from './components/AddAuthor';
import AddBook from './components/AddBook';
import { BrowserRouter as Router } from 'react-router-dom'




function App() {




  return (
    <>
      <Router>
        <Header />
      </Router>
    </>
  );
}

export default App;