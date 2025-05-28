import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, onEatSushi, eaten }) {
  const [ sushiIndex,setSushiIndex ] = useState(0);

  const sushiCard = sushis.slice(sushiIndex, sushiIndex + 4).map((sushi) => {
    return <Sushi
      key={sushis.id}
      sushi={sushis}
      onEatSushi={onEatSushi}
      eaten={eaten.some(e => e.id === sushis.id)}
    />
  });
  
  return (
    <div className="belt">
      {sushiCard}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
