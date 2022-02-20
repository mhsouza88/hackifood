import { useState } from "react";

import DefaultLogo from "../assets/DefaultLogo.svg";
import OkSign from "../assets/OkSign.png";
import CreditCardIcon from "../assets/CreditCardIcon.svg";
import DolarSignIcon from "../assets/DolarSignIcon.svg";
import ExtractIcon from "../assets/ExtractIcon.svg";
import DoubtIcon from "../assets/DoubtIcon.svg";
import ForkAndSpoonIcon from "../assets/ForkAndSpoonIcon.svg";
import GraphicIcon from "../assets/GraphicIcon.svg";
import HomeIcon from "../assets/HomeIcon.svg";
import WatchIcon from "../assets/WatchIcon.svg";
import TrophieIcon from "../assets/TrophieIcon.svg";
import HeartIcon from "../assets/HeartIcon.svg";
import StarIcon from "../assets/StarIcon.svg";
import SmartPhoneIcon from "../assets/SmartPhoneIcon.svg";
import LocalizationIcon from "../assets/LocalizationIcon.svg";
import PriceTagIcon from "../assets/PriceTagIcon.svg";
import PizzaIcon from "../assets/PizzaIcon.svg";
import ToolIcon from "../assets/ToolIcon.svg";
import ShopIcon from "../assets/ShopIcon.svg";
import ShoppingCartIcon from "../assets/ShoppingCartIcon.svg";
import LeftArrowIcon from "../assets/LeftArrowIcon.svg";
import RightArrowIcon from "../assets/RightArrowIcon.svg";

//Red Icons

import CreditCardIconRed from "../assets/CreditCardIconRed.svg";
import DolarSignIconRed from "../assets/DolarSignIconRed.svg";
import ExtractIconRed from "../assets/ExtractIconRed.svg";
import DoubtIconRed from "../assets/DoubtIconRed.svg";
import ForkAndSpoonIconRed from "../assets/ForkAndSpoonIconRed.svg";
import GraphicIconRed from "../assets/GraphicIconRed.svg";
import HomeIconRed from "../assets/HomeIconRed.svg";
import WatchIconRed from "../assets/WatchIconRed.svg";
import TrophieIconRed from "../assets/TrophieIconRed.svg";
import HeartIconRed from "../assets/HeartIconRed.svg";
import StarIconRed from "../assets/StarIconRed.svg";
import SmartPhoneIconRed from "../assets/SmartPhoneIconRed.svg";
import LocalizationIconRed from "../assets/LocalizationIconRed.svg";
import PriceTagIconRed from "../assets/PriceTagIconRed.svg";
import PizzaIconRed from "../assets/PizzaIconRed.svg";
import ToolIconRed from "../assets/ToolIconRed.svg";
import ShopIconRed from "../assets/ShopIconRed.svg";
import ShoppingCartIconRed from "../assets/ShoppingCartIconRed.svg";

import {
  Container,
  MenuItem,
  OpenStoreWarning,
  LogoImage,
  ArrowContainer,
} from "./styles";

const Menu = () => {
  const [closeMenu, setCloseMenu] = useState(false);

  const showMyCompanyName = () => {
    const companyName = "My Company";
    if (closeMenu) {
      const splittedName = companyName.split(" ");
      return splittedName.map((string) => {
        return string[0].toUpperCase() + ".";
      });
    } else {
      return companyName;
    }
  };

  return (
    <Container closeMenu={closeMenu}>
      <ArrowContainer
        // closeMenu={closeMenu}
        onClick={() => {
          setCloseMenu(!closeMenu);
        }}
      >
        {closeMenu ? <img src={RightArrowIcon} /> : <img src={LeftArrowIcon} />}
      </ArrowContainer>
      <LogoImage closeMenu={closeMenu}>
        <img src={DefaultLogo} />
        <h4>{showMyCompanyName()}</h4>
      </LogoImage>
      <OpenStoreWarning closeMenu={closeMenu}>
        <img src={OkSign} />
        <p>Loja Aberta</p>
      </OpenStoreWarning>
      <ul key="1">
        <MenuItem
          closeMenu={closeMenu}
          menucolor={"green"}
          textcolor={"red"}
          // active={true}
          onClick={() => {}}
        >
          <img src={closeMenu ? HomeIconRed : HomeIcon} />
          <span>Inicio</span>
        </MenuItem>
        <MenuItem
          closeMenu={closeMenu}
          menucolor={"green"}
          textcolor={"red"}
          // active={true}
          onClick={() => {}}
        >
          <img src={closeMenu ? HeartIconRed : HeartIcon} />
          <span>Feed</span>
        </MenuItem>
        <MenuItem
          closeMenu={closeMenu}
          menucolor={"green"}
          textcolor={"red"}
          // active={true}
          onClick={() => {}}
        >
          <img src={closeMenu ? StarIconRed : StarIcon} />
          <span>Avaliações</span>
        </MenuItem>
        <MenuItem
          closeMenu={closeMenu}
          menucolor={"green"}
          textcolor={"red"}
          // active={true}
          onClick={() => {}}
        >
          <img src={closeMenu ? ExtractIconRed : ExtractIcon} />
          <span>Pedidos</span>
        </MenuItem>
        <MenuItem
          closeMenu={closeMenu}
          menucolor={"green"}
          textcolor={"red"}
          // active={true}
          onClick={() => {}}
        >
          <img src={closeMenu ? DolarSignIconRed : DolarSignIcon} />
          <span>Financeiro</span>
        </MenuItem>
        <MenuItem
          closeMenu={closeMenu}
          menucolor={"green"}
          textcolor={"red"}
          // active={true}
          onClick={() => {}}
        >
          <img src={closeMenu ? SmartPhoneIconRed : SmartPhoneIcon} />
          <span>Cardápio Digital</span>
        </MenuItem>
        <MenuItem
          closeMenu={closeMenu}
          menucolor={"green"}
          textcolor={"red"}
          // active={true}
          onClick={() => {}}
        >
          <img src={closeMenu ? ForkAndSpoonIconRed : ForkAndSpoonIcon} />
          <span>Cardápios</span>
        </MenuItem>
        <MenuItem
          closeMenu={closeMenu}
          menucolor={"green"}
          textcolor={"red"}
          // active={true}
          onClick={() => {}}
        >
          <img src={closeMenu ? WatchIconRed : WatchIcon} />
          <span>Horários</span>
        </MenuItem>
        <MenuItem
          closeMenu={closeMenu}
          menucolor={"green"}
          textcolor={"red"}
          // active={true}
          onClick={() => {}}
        >
          <img src={closeMenu ? LocalizationIconRed : LocalizationIcon} />
          <span>Áreas de Entrega</span>
        </MenuItem>
        <MenuItem
          closeMenu={closeMenu}
          menucolor={"green"}
          textcolor={"red"}
          // active={true}
          onClick={() => {}}
        >
          <img src={closeMenu ? CreditCardIconRed : CreditCardIcon} />
          <span>Formas de Pagamento</span>
        </MenuItem>
        <MenuItem
          closeMenu={closeMenu}
          menucolor={"green"}
          textcolor={"red"}
          // active={true}
          onClick={() => {}}
        >
          <img src={closeMenu ? PriceTagIconRed : PriceTagIcon} />
          <span>Promoções</span>
        </MenuItem>
        <MenuItem
          closeMenu={closeMenu}
          menucolor={"green"}
          textcolor={"red"}
          // active={true}
          onClick={() => {}}
        >
          <img src={closeMenu ? PizzaIconRed : PizzaIcon} />
          <span>iFood Premium</span>
        </MenuItem>
        <MenuItem
          closeMenu={closeMenu}
          menucolor={"green"}
          textcolor={"red"}
          // active={true}
          onClick={() => {}}
        >
          <img src={closeMenu ? ToolIconRed : ToolIcon} />
          <span>Serviços</span>
        </MenuItem>
        <MenuItem
          closeMenu={closeMenu}
          menucolor={"green"}
          textcolor={"red"}
          // active={true}
          onClick={() => {}}
        >
          <img src={closeMenu ? ShopIconRed : ShopIcon} />
          <span>Perfil</span>
        </MenuItem>
        <MenuItem
          closeMenu={closeMenu}
          menucolor={"green"}
          textcolor={"red"}
          // active={true}
          onClick={() => {}}
        >
          <img src={closeMenu ? GraphicIconRed : GraphicIcon} />
          <span>Desempenho</span>
        </MenuItem>
        <MenuItem
          closeMenu={closeMenu}
          menucolor={"green"}
          textcolor={"red"}
          // active={true}
          onClick={() => {}}
        >
          <img src={closeMenu ? TrophieIconRed : TrophieIcon} />
          <span>Super-Restaurantes</span>
        </MenuItem>
        <MenuItem
          closeMenu={closeMenu}
          menucolor={"green"}
          textcolor={"red"}
          // active={true}
          onClick={() => {}}
        >
          <img src={closeMenu ? ShoppingCartIconRed : ShoppingCartIcon} />
          <span>iFood Shop</span>
        </MenuItem>
        <MenuItem
          closeMenu={closeMenu}
          menucolor={"green"}
          textcolor={"red"}
          // active={true}
          onClick={() => {}}
        >
          <img src={closeMenu ? DoubtIconRed : DoubtIcon} />
          <span>Chamados e Ajuda</span>
        </MenuItem>
      </ul>
    </Container>
  );
};

export default Menu;
