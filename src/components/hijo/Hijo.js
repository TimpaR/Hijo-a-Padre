import React, { useState } from "react";

const Hijo = ({ setPadre }) => {
  const [javi, setJavi] = useState("");
  const changeSon = () => {
    setPadre("hijo");
  };

  const changeDad = () => {
    setPadre("padre");
  };

  const javiTroll = () => {
    setJavi("Javi es un troll");
  };
  return (
    <div>
      <br></br>
      <button onClick={changeSon}>Cambiar valor a hijo</button>
      <button onClick={changeDad}>Cambiar valor a padre</button>
      <br></br>

      <h1>{javi}</h1>
      <button onClick={javiTroll}>Sorpresa</button>
    </div>
  );
};

export default Hijo;
