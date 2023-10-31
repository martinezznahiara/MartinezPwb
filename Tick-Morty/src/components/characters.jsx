import { useState } from "react";
import "../App.css";
import { useEffect } from "react";
import { useCharacter } from "../hooks/useCharacter";

export const Characters = () => {
  const { getAllCharacters, character } = useCharacter();

  const getStatusColor = (status) => {
    if (status === "Alive") {
      return "vivo";
    }
    if (status === "Dead") {
      return "muerto";
    } else {
      return "desaparecido";
    }
  };

  useEffect(() => {
    getAllCharacters();
  }, []);
  return (
    <ul className="contenedor">
      {character.map((item, index) => (
        <div className="cajagris" key={index}>
          <img src={item.image}></img>

          <div className="info">
            <div>
              <h3>{item.name}</h3>
              <p>
                <span
                  className={`status_icon ${getStatusColor(item.status)}`}
                ></span>
                {item.status} - {item.species}
              </p>
            </div>
            <div>
              <p>Last known location:</p>
              <h3>{item.location.name}</h3>
            </div>
            <div>
              <p>First seen in:</p>
              <h3>{}</h3>
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
};
