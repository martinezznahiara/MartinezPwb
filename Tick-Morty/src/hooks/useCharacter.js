import { useState } from "react";

export function useCharacter() {
  const [character, setCharacter] = useState([]);
  const getAllCharacters = () => {
    return fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((date) => setCharacter(date.results));
  };
  return {
    character,
    getAllCharacters,
  };
}
