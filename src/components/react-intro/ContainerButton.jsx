import React from "react";

import ButtonClass from "./ButtonClass";
import ButtonFunctional from "./ButtonFunctional";

const ContainerButton = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "0.5em" }}>
      <ButtonClass />
      <ButtonFunctional />
    </div>
  );
};

export default ContainerButton;
