import React from "react";

const Types = (props) => {
  return props.arrTypes.map((t) => (
    <div key={t.slot} className="chip">
      <span className="type">{t.type.name}</span>
    </div>
  ));
};

export default Types;
