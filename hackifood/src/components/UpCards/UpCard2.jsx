import { MainBox, AlignItems } from "./styles"
import BurguerIcon from '../../assets/Group_1977.svg'

const UpCard2 = () => {
    return (
        <MainBox>
            <AlignItems>
                <h4>Ingrediente em alta<br/>que você não oferece</h4>
                <img src={BurguerIcon} alt="" />
            </AlignItems>
                <h2>Hambúrguer de Soja</h2>
                <p>nos últimos 7 dias</p>
        </MainBox>
    )
}

export default UpCard2