import { Card } from "antd";

import { SearchChart } from "../Charts";

import { ChartWrapper, Section } from "./styles";

export function MostSearchedIngredients() {
  return (
    <Card style={{ width: '414px' }}>
      <Section>
        <h1>
          <span>Ingredientes mais buscados</span>{" "}
          no seu segmento (mês) Busca de Ingredientespor Período
        </h1>
      </Section>

      <ChartWrapper>
        <SearchChart food="Bacon" percent={100} searches="43.165 buscas" />
        <SearchChart
          food="Hambúrguer de Feijão"
          percent={50}
          searches="37.485 buscas"
        />
        <SearchChart food="Cheddar" percent={45} searches="35.235 buscas" />
        <SearchChart
          food="Hambúrguer de Bovino"
          percent={38}
          searches="24.545 buscas"
        />
        <SearchChart
          food="Batata Frita"
          percent={28}
          searches="13.165 buscas"
        />
      </ChartWrapper>
    </Card>
  );
}
