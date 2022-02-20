import "./styles/antd.css";
import Menu from "./components/Menu";
import StylesGlobal from "./styles/GlobalStyles.jsx";
import UpCard1 from "./components/UpCards/UpCard1.jsx";
import Top5Card from "./components/Top5Card/Top5Card.jsx";
import { Layout, message } from "antd";
import { Header } from "antd/lib/layout/layout";

import { CompareIngredient } from "./components/CompareIngredient";
import { SearchIngredientsPeriod } from "./components/SearchIngredientsPeriod";
import { MostSearchedIngredients } from "./components/MostSearchedIngredients";

export function App() {
  return (
    <div>
      <StylesGlobal />
      <Layout
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100vh",
          width: "100vw",
          background: "#fff",
        }}
      >
        <Menu />
        <div style={{ display: "flex", flexDirection: "column", gap: '32px' }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row"
            }}
          >
            <UpCard1 />
            <Top5Card />
          </div>
          <CompareIngredient />
          <SearchIngredientsPeriod />
          <MostSearchedIngredients />
        </div>
      </Layout>
    </div>
  );
}
