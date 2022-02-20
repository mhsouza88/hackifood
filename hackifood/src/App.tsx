import Menu from './components/Menu';
import StylesGlobal  from './styles/GlobalStyles.jsx'
import {AppStyle,RightMessagesContainer, MainBodyContainer, MainBodyHeaderStyle,MainBodyContentStyle, InformationDispositionStyle, DualButtonsDisposition} from './styles.js'
import {Button, Layout} from 'antd';
import OpportunitesMessage from './components/OpportunitesMessage'
import { useEffect, useState } from 'react';
import Modal from 'antd/lib/modal/Modal';
import "./styles/antd.css";
import UpCard1 from "./components/UpCards/UpCard1.jsx";
import Top5Card from "./components/Top5Card/Top5Card.jsx";
import { AlignCards } from './styles/AppCSS.jsx'
import AlignUpCards from './components/UpCards/AlignUpCards.jsx'

import { CompareIngredient } from "./components/CompareIngredient";
import { SearchIngredientsPeriod } from "./components/SearchIngredientsPeriod";
import { MostSearchedIngredients } from "./components/MostSearchedIngredients";


export function App() {
  
  const [showModal, setShowModal] = useState(false)
  
  useEffect(()=> {
    if(!showModal){
    setTimeout(() => {
      setShowModal(true)
    }, 20000)}
}, [showModal])

  return (
    <AppStyle >
      <StylesGlobal />
      <Layout  style={{  display: 'flex', overflowY: 'scroll',flexDirection: 'row', justifyContent: 'flex-start',height: '100vh', width: '100vw', background: '#f2f2f2', padding: '0 5rem 0 0' }} >
      <Menu/>
        <MainBodyContainer>
          <Modal
          title={<h1 style={{color: '#EA1D2C', fontSize: '2rem'}}>Oportunidade para vender mais! </h1>}
          visible={showModal}
          onOk={() => setShowModal(false)}
          onCancel={() => setShowModal(false)}
          closable={false}
          footer={
            <DualButtonsDisposition>
            <Button
              size={'large'}
              className='botao'
              onClick={() => {
                setShowModal(false)
              }}
              style={{color: '#A6A29F'}}
            >
              Cancelar
            </Button>
            <Button
              size={'large'}
              type='primary'
              onClick={() => setShowModal(false)}
              style={{backgroundColor: '#EA1D2C', color: '#FFFFFF'}}
            >
              Confirmar
            </Button>
          </DualButtonsDisposition>
          }
          centered
          bodyStyle={{height:'20vh',width: '100%'}}
          okButtonProps={<p>teste</p>}
          >

            <p style={{fontSize: '1.5rem'}}>A busca por <strong>hamburguer </strong>aumentou consideravelmente na última hora.</p>
            <p style={{fontSize: '1.5rem'}}>Deseja oferecer um cupom de desconto?</p>
          </Modal>
          <MainBodyHeaderStyle
            style={{
              display: "flex",
              flexDirection: "row"
            }}
          >
            <AlignUpCards />
          </MainBodyHeaderStyle>
          <MainBodyContentStyle>
            <InformationDispositionStyle>
              <CompareIngredient />
              <SearchIngredientsPeriod />
            </InformationDispositionStyle>
          <RightMessagesContainer>
            <OpportunitesMessage/>
            <MostSearchedIngredients />
          </RightMessagesContainer>
          </MainBodyContentStyle>
        </MainBodyContainer>
      </Layout>
      
    </AppStyle>
  );
}
