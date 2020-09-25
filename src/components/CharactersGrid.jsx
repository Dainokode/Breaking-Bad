import React from "react";
import CharacterCard from "./CharacterCard";

const CharactersGrid = ({ characters, isLoading }) => {
  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <section className="cards">
          {characters.map((character) => (
            <CharacterCard key={character.char_id} character={character} />
          ))}
        </section>
      )}
    </div>
  );
};

export default CharactersGrid;
