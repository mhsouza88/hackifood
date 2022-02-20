import { Card, Select, Typography, Divider, Tag } from 'antd';

import { PeriodsChart, SearchChart } from '../Charts';
import { SearchInput } from '../SearchInput';

import { Section, FiltersWrapper } from './styles';

export function SearchIngredientsPeriod() {
  return (
    <Card style={{ width: 1012 }}>
      <Section>
        <div className="title">
          <h1><span>Busca de Ingredientes</span> por Período</h1>
        </div>
        <div className="select">
          <Select style={{ width: '198px' }} placeholder="Filtrar">
            <Select.Option>
              <Typography>Mostrar hoje</Typography>
            </Select.Option>
          </Select>
        </div>
      </Section>

      <Divider />

      <FiltersWrapper>
        <div className="wrapper-search">
          <div className='ingredient-search' style={{ maxWidth: '350px', width: '100%' }}>
            <SearchInput placeholder='Procurar pela categoria do Ingrediente' />
          </div>
          <div className='name-search' style={{ maxWidth: '350px', width: '100%' }}>
            <SearchInput placeholder='Procurar pelo nome do Ingrediente' />
          </div>
        </div>
      </FiltersWrapper>

      <PeriodsChart />
    </Card>
  )
}

