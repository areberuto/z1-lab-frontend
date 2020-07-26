import React from "react";
import { useQuery } from "react-query";
import "./App.css";
import Column from "./components/Column";

function App() {
  return (
    <div id="container">
      <h1>Pokedex</h1>
      <Pokedex />
    </div>
  );
}

const fetchPokemon = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await response.json();
  return data;
};

function Pokedex() {
  const { data, status } = useQuery("fetchPokemon", fetchPokemon);

  if (status === "loading") return <div></div>;

  return (
    <React.Fragment>
      <Column results={data.results} next={data.next} />
    </React.Fragment>
  );
}

export default App;
