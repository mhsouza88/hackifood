import { MainBox, AlignItems } from "./styles"
import BuildingIcon from '../../assets/Group_1913.svg'

const UpCard1 = () => {
    return (
        <MainBox>
            <AlignItems>
                <h4>Ingrediente mais vendido</h4>
                <img src={BuildingIcon} alt="" />
            </AlignItems>
                <h1>Cheddar</h1>
                <p>nos últimos 7 dias</p>
        </MainBox>
    )
}

export default UpCard1