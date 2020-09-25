import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/Header";
import "./styles/main.scss";
import CharactersGrid from "./components/CharactersGrid";
import Searchinput from "./components/SearchInput";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      console.log(result.data);
      setCharacters(result.data);
      setIsLoading(false);
    };

    fetchCharacters();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Searchinput getQuery={(q) => setQuery(q)} />
      <CharactersGrid characters={characters} isLoading={isLoading} />
    </div>
  );
};

export default App;
