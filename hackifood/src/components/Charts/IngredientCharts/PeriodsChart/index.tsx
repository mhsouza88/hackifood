import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '07:00',
    uv: 320
  },
  {
    name: '09:00',
    uv: 400
  },
  {
    name: '11:00',
    uv: 300
  },
  {
    name: '13:00',
    uv: 250
  },
  {
    name: '15:00',
    uv: 90
  },
  {
    name: '17:00',
    uv: 200
  },
  {
    name: '19:00',
    uv: 0
  },
];

export function PeriodsChart() {
  return (
    <ResponsiveContainer width={960} height={200}>
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis tickLine={false} />
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#EA1D2C" stopOpacity={0.4}/>
            <stop offset="95%" stopColor="#EA1D2C" stopOpacity={0.2}/>
          </linearGradient>
        </defs>

        <Area type="monotone" dataKey="uv" stroke="#EA1D2C" fillOpacity={1} fill="url(#colorUv)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
