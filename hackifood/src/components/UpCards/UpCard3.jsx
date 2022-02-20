import { MainBox, AlignItems } from "./styles"
import BurguerIcon from '../../assets/Group_1977.svg'

const UpCard3 = () => {
    return (
        <MainBox>
            <AlignItems>
                <h4>Bairro de potencial<br/>expansão de vendas</h4>
                <img src={BurguerIcon} alt="" />
            </AlignItems>
                <h2>Santo Amaro</h2>
                <p>nos últimos 60 dias</p>
        </MainBox>
    )
}

export default UpCard3