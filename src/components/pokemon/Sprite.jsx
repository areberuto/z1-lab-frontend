import React from "react";

const Sprite = (props) => {
  return (
    <img alt="Pokemon avatar" className="pokeSprite" src={props.sprite}></img>
  );
};

export default Sprite;
