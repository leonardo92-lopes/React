import React from "react";

const Events = () => {
  const click = () => {
    console.log("você Clicou !");
  };
  return (
    <div>
      <div>
        <button onClick={click}> Clique Aqui</button>
        
      </div>
    </div>
  );
};

export default Events;
