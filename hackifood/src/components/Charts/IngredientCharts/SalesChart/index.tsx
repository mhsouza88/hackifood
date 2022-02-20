import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  {
    name: "Bacon",
    pv: 100,
    uv: 100,
  },
  {
    name: "Ham. Bovino",
    pv: 100,
    uv: 100,
  },
  {
    name: "Queijo Prato",
    pv: 50,
    uv: 100,
  },
  {
    name: "Ham. de Feijão",
    pv: 50,
    uv: 100,
  },
  {
    name: "Ham. de Frango",
    pv: 100,
    uv: 50,
  },
  {
    name: "Onion Rings",
    pv: 100,
    uv: 30,
  },
];

export function SalesChart() {
  return (
    <ResponsiveContainer width={960} height={300}>
      <BarChart data={data}>
        <Legend
          verticalAlign="top"
          align="right"
          iconType="circle"
          iconSize={8}
          height={36}
        />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar
          name="Seu Restaurante"
          dataKey="pv"
          fill="#EA1D2C"
          width="32px"
          barSize={32}
          radius={[100, 100, 0, 0]}
        />
        <Bar
          name="Média do Mercado"
          dataKey="uv"
          fill="#FFB761"
          width="32px"
          barSize={32}
          radius={[100, 100, 0, 0]}
        />
        <XAxis dataKey="name" color="#A8A8A8" tickLine={false} dy={12} />
      </BarChart>
    </ResponsiveContainer>
  );
}
