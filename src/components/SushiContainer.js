import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({ sushis, onEatSushi, eaten }) {
  const [sushiIndex, setSushiIndex] = useState(0);

  const sushiCard = sushis.slice(sushiIndex, sushiIndex + 4).map((sushi) => {
    return <Sushi
      key={sushi.id}
      sushi={sushi}
      onEatSushi={onEatSushi}
      eaten={eaten.some(e => e.id === sushi.id)}
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
