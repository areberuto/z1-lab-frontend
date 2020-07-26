import React from "react";
import { useQuery } from "react-query";
import Sprite from "./Sprite";
import Types from "./Types";
import "../../styles/Pokemon.css";

const PokeCard = (props) => {
  const { data, status } = useQuery(props.url, fetchPokeData);

  if (status === "loading") return <div></div>;

  return (
    <div className={`card ${props.pokeLeft ? "pokeLeft" : "pokeRight"}`}>
      <div className="foreground">
        <div className="frame2">
          <Sprite sprite={data.sprites["front_default"]} />
          <div className="frame1">
            <Types arrTypes={data.types} />
          </div>
        </div>
        <div className="frame4">
          <span className="pokeName">{formatName(data.name)}</span>
          <span className="pokeNumber">#{formatId(data.id)}</span>
        </div>
      </div>
    </div>
  );
};

const fetchPokeData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const formatName = (name) => name.charAt(0).toUpperCase() + name.slice(1);

const formatId = (id) => (id <= 99 ? `000${id}`.slice(-3) : id);

export default PokeCard;
