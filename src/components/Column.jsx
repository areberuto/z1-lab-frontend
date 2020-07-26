import React from "react";
import PokeCard from "./pokemon/PokeCard";
import "../styles/Column.css";

const Column = (props) => {
  const resultsPair = [];

  for (let i = 0; i < props.results.length; i = i + 2) {
    resultsPair.push([props.results[i], props.results[i + 1]]);
  }

  return (
    <div id="cardsContainer">
      {resultsPair.map((pair, i) => (
        <div className="rowPair" key={`row${i}`}>
          <PokeCard
            key={`poke${i}first`}
            url={pair[0].url}
            pokeLeft={true}
          ></PokeCard>
          <PokeCard
            key={`poke${i}second`}
            url={pair[1].url}
            pokeRight={true}
          ></PokeCard>
        </div>
      ))}
    </div>
  );
};

export default Column;
