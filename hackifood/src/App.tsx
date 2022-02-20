import Menu from './components/Menu';
import StylesGlobal  from './styles/GlobalStyles.jsx'
import UpCard1 from './components/UpCards/UpCard1.jsx'
import Top5Card from './components/Top5Card/Top5Card.jsx'
import {Layout, message} from 'antd';
import { Header } from 'antd/lib/layout/layout';

export function App() {
  
  return (
    <div>
      <Layout style={{ display: 'flex', flexDirection: 'row', height: '100vh', width: '100vw', background: '#fff'}} >
      <StylesGlobal />
      <Menu/>
      <UpCard1 />
      <Top5Card />
      </Layout>
    </div>
  ); 
} 
