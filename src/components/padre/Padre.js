import React, { useState } from "react";
import Hijo from "../hijo/Hijo";

const Padre = () => {
  const [padre, setPadre] = useState("padre");

  return (
    <div>
      {padre}
      <Hijo setPadre={setPadre}/>
    </div>
  );
};

export default Padre;
