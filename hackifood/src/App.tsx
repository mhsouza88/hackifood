import './styles/antd.css';
import Menu from './components/Menu';
import StylesGlobal  from './styles/GlobalStyles.jsx'

import { CompareIngredient } from './components/CompareIngredient';

export function App() {
  return (
    <div>
      <StylesGlobal />
      <Menu />
    </div>
  ); 
} 
