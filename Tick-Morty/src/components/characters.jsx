import { useState } from "react";
import "../App.css";
import { useEffect } from "react";

export function Characters() {
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacter(data.results));
  }, []);
  return (
    <ul className="completo">
      {character.map((item, index) => (
        <div className="personajes" key={index}>
          <div className="img">
            <img src={item.image}></img>
          </div>
          <div className="info">
            <h3>{item.name}</h3>
            <p>
              {item.status} - {item.species}
            </p>
            <p>Last known location:</p>
            <h3>{item.location.name}</h3>
            <p>First seen in:</p>
            <h3>{}</h3>
          </div>
        </div>
      ))}
    </ul>
  );
}
