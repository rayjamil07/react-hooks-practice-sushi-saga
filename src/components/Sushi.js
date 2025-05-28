import React from "react";

function Sushi({ sushi, onEatSushi, eaten }) {
  const { name, img_url, price} = sushi;

  function handleClick () {
    if (!eaten) {
      onEatSushi(sushi)
    } else {
      alert("Can't eat an empty plate!!")
    }
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleClick}>
        {eaten ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
