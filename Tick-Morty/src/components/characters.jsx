import { useState } from "react";
import "../App.css";
import { useEffect } from "react";
import { useCharacter } from "../hooks/useCharacter";

export const Characters = () => {
  const { getAllCharacters, character } = useCharacter();

  useEffect(() => {
    getAllCharacters();
  }, []);
  return (
    <ul className="completo">
      {character.map((item, index) => (
        <div className="cajagris" key={index}>
          <img src={item.image}></img>

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
};
