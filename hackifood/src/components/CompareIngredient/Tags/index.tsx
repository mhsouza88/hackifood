import { Tag } from 'antd';

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

export function Tags() {
  return (
    <>
      {TAGS.map(tag => (
        <Tag key={tag.id}>
          {tag.name}
        </Tag>
      ))}
    </>
  )
}
