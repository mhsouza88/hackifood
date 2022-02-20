import Menu from './components/Menu';
import StylesGlobal  from './styles/GlobalStyles.jsx'
import UpCard1 from './components/UpCards/UpCard1.jsx'
import UpCard2 from './components/UpCards/UpCard2.jsx'
import UpCard3 from './components/UpCards/UpCard3.jsx'
import Top5Card from './components/Top5Card/Top5Card.jsx'
import {Layout, message} from 'antd';
import { Header } from 'antd/lib/layout/layout';
import AlignUpCards from './components/UpCards/AlignUpCards.jsx'
import { AlignCards } from './styles/AppCSS.jsx'


export function App() {
  
  return (
    <div>
      <Layout style={{ display: 'flex', flexDirection: 'row', height: '100vh', width: '100vw', background: '#fff'}} >
      <StylesGlobal />
      <Menu/>
      <AlignCards>
      <AlignUpCards />
      <Top5Card />
      </AlignCards>
      </Layout>
    </div>
  ); 
} 
