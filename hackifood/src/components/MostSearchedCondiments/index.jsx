import { Divider } from "antd";
import React from "react";
import { CondimentsContainer } from "./styles";

const index = () => {
  return (
    <CondimentsContainer>
      <h1>
        <span>Ingredientes mais buscados </span> no seu segmento (mês)
      </h1>
      <Divider style={{ border: "1px solid #EEEEEE", width: "100%" }} />
      <div>
        <span>
          <p style={{ width: "80%" }}>Bacon</p>
        </span>
        <p>43.165 buscas</p>
      </div>
      <div>
        <span>
          <p style={{ width: "70%" }}>Hambúrguer de Fr...</p>
        </span>
        <p>38.848 buscas</p>
      </div>
      <div>
        <span>
          <p style={{ width: "60%" }}>Cheddar</p>
        </span>
        <p>34.963,65 buscas</p>
      </div>
      <div>
        <span>
          <p style={{ width: "55%" }}>Hambúrguer de ...</p>
        </span>
        <p>36.906 buscas</p>
      </div>
      <div>
        <span>
          <p style={{ width: "25%" }}>Batata Fri...</p>
        </span>
        <p>25.834 buscas</p>
      </div>
    </CondimentsContainer>
  );
};

export default index;
