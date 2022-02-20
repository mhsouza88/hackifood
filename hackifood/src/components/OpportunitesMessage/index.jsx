import { Divider } from "antd";
import React from "react";
import { MessageContainer } from "./styles";

const index = () => {
  return (
    <MessageContainer>
      <h1>Top 5 Oportunidades identificadas</h1>
      <Divider style={{ border: "1px solid #EEEEEE", width: "100%" }} />
      <p>
        1- Há muitas pessoas procurando por produtos <span> sem lactose </span>
        na sua região. Você pode oferecer pratos e aumentar sua performance de
        vendas.
      </p>

      <p>
        2- Aumento de 4,12% na busca por <span>onion rings </span> na sua
        região.
      </p>

      <p>
        3- Aumento de 9,1% na busca por <span>hamburgueres de frango </span>
        na sua região.
      </p>

      <p>
        4- Aumento de 13,4% na busca por <span>hamburgueres vegetarianos </span>{" "}
        na sua região;
      </p>

      <p>
        4- Cheeseburguers que possuem <span>molho mostarda e mel </span>
        apresentaram melhor performance de vendas.
      </p>

      <p>
        5- Hamburgueres com <span>bacon </span> venderam 20% a mais que
        hamburgueres que hamburgueres sem bacon.
      </p>
    </MessageContainer>
  );
};

export default index;
