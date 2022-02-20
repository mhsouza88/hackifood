import { Card, Select, Typography, Divider, Tag } from 'antd';

import { FoodCharts } from '../Charts';
import { SearchInput } from '../SearchInput';
import { Tags } from './Tags';

import { Section, FiltersWrapper } from './styles';

const TAGS = [
  {
    id: 1,
    name: 'Vegetarianos',
  },
  {
    id: 2,
    name: 'Bebidas'
  },
  {
    id: 3,
    name: 'Mais pedidos'
  },
  {
    id: 4,
    name: 'Restaurantes próximos'
  }
]

export function CompareIngredient() {
  return (
    <Card style={{ width: 1012 }}>
      <Section>
        <div className="title">
          <h1>Comparativo de vendas <span>por Ingrediente</span></h1>
        </div>
        <div className="select">
          <Select style={{ width: '100%' }} placeholder="Mostrar">
            <Select.Option>
              <Typography>Mostrar último mês</Typography>
            </Select.Option>
          </Select>
        </div>
      </Section>

      <Divider />

      <FiltersWrapper>
        <div className="wrapper-search">
          <div className='ingredient-search'>
            <SearchInput placeholder='Procurar pela categoria do Ingrediente' />
          </div>
          <div className='name-search'>
            <SearchInput placeholder='Procurar pelo nome do Ingrediente' />
          </div>
        </div>
        <div className='tags-wrapper'>
          <Tags />
        </div>
      </FiltersWrapper>

      <FoodCharts />
    </Card>
  )
}
