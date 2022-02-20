import "./styles/antd.css";
import Menu from "./components/Menu";
import StylesGlobal from "./styles/GlobalStyles.jsx";
import Top5Card from "./components/Top5Card/Top5Card.jsx";
import { AlignCards } from './styles/AppCSS.jsx'
import { Layout } from "antd";
import AlignUpCards from './components/UpCards/AlignUpCards.jsx'

import { CompareIngredient } from "./components/CompareIngredient";
import { SearchIngredientsPeriod } from "./components/SearchIngredientsPeriod";
import { MostSearchedIngredients } from "./components/MostSearchedIngredients";

export function App() {
  return (
    <div>
      <Layout
        style={{
          display: "flex",
          flexDirection: "row",
          height: "100vh",
          width: "100vw",
          background: "#fff",
        }}
      >
        <StylesGlobal />
        <Menu />
        <div style={{ display: "flex", flexDirection: "column", gap: '32px' }}>
          <div
            style={{
              display: "flex",
              flexDirection: "row"
            }}
          >
            {/* <AlignCards /> */}
            <AlignUpCards />
          </div>
          <Top5Card />
          <CompareIngredient />
          <SearchIngredientsPeriod />
          <MostSearchedIngredients />
        </div>
      </Layout>
    </div>
  );
}
