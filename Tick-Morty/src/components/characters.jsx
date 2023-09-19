import { useState } from "react";

import { useEffect } from "react";

export function Characters() {
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacter(data.results));
  }, []);

  return (
    <ul>
      {character.map((item, index) => (
        <li key={index}>
          <h3>{item.name}</h3>
          <p>{item.status}</p>
          <img src={item.image} />
        </li>
      ))}
    </ul>
  );
}
