import Menu from './components/Menu';
import StylesGlobal  from './styles/GlobalStyles.jsx'
import {RightMessagesContainer} from './styles.js'
import {Layout} from 'antd';
import OpportunitesMessage from './components/OpportunitesMessage'
import MostSearchedCondiments from './components/MostSearchedCondiments'
import { useState } from 'react';
import Modal from 'antd/lib/modal/Modal';


export function App() {
  const [showNodal, setShowModal] = useState(true)
  
  return (
    <div style={{display: 'flex', flexDirection: 'row',}}>
      <Layout  style={{  display: 'flex', overflowY: 'scroll',flexDirection: 'row', justifyContent: 'space-between',height: '100vh', width: '100vw', background: '#f2f2f2', padding: '0 5rem 0 0' }} >
      <StylesGlobal />
      <Menu/>
      <RightMessagesContainer>
      <OpportunitesMessage/>
      <MostSearchedCondiments/>
      </RightMessagesContainer>
      </Layout>
      
    </div>
  ); 
} 
