import Menu from './components/Menu';
import StylesGlobal  from './styles/GlobalStyles.jsx'
import {Layout, message} from 'antd';
import { Header } from 'antd/lib/layout/layout';

export function App() {
  
  return (
    <div style={{display: 'flex', flexDirection: 'row',}}>
  
      <Layout  style={{ height: '100vh', background: '#fff'}} >
      <StylesGlobal />
      <Menu/>
      </Layout>
    </div>
  ); 
} 
