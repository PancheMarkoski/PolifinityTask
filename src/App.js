import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import RecipesList from './components/RecipesList/RecipesList';

function App() {


  const [SearchRes, setSearchRes] = useState()
  const [SearchTerm, setSearchTerm] = useState()

  return (
    <div className="App">
      <SearchBar setSearchRes={setSearchRes} setSearchTerm={setSearchTerm} />
      <RecipesList SearchRes={SearchRes} SearchTerm={SearchTerm} />
    </div>
  );
}

export default App;
