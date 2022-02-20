import { Card, Select, Typography, Divider, Tag } from 'antd';

import { SalesChart } from '../Charts';
import { SearchInput } from '../SearchInput';
import { Tags } from './Tags';

import { Section, FiltersWrapper } from './styles';

export function CompareIngredient() {
  return (
    <Card style={{ width: 1012 }}>
      <Section>
        <div className="title">
          <h1>Comparativo de vendas <span>por Ingrediente</span></h1>
        </div>
        <div className="select">
          <Select style={{ width: '198px' }} placeholder="Filtrar">
            <Select.Option>
              <Typography>Mostrar último mês</Typography>
            </Select.Option>
          </Select>
        </div>
      </Section>

      <Divider />

      <FiltersWrapper>
        <div className="wrapper-search">
          <div className='ingredient-search' style={{ maxWidth: '350px', width: '100%' }} >
            <SearchInput placeholder='Procurar pela categoria do Ingrediente' />
          </div>
          <div className='name-search' style={{ maxWidth: '350px', width: '100%' }}>
            <SearchInput placeholder='Procurar pelo nome do Ingrediente' />
          </div>
        </div>
        <div className='tags-wrapper'>
          <Tags />
        </div>
      </FiltersWrapper>

      <SalesChart />
    </Card>
  )
}
