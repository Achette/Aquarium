import { dados } from '../../assets/helpers/dados'
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Scatter,
} from 'recharts'
import { Compute } from '@/utils/estatistica'

export default function ComposedChartWithAxisLabels() {
  const lumini = dados.map((data) => data.luminosidade)

  console.log(Compute(lumini))
  return (
    <ResponsiveContainer width={'100%'} height="90%">
      <ComposedChart
        width={500}
        height={400}
        data={dados}
        margin={{
          top: 20,
          right: 80,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis
          dataKey="data_hora"
          label={{
            value: 'Dia/Hora',
            position: 'insideBottomRight',
            offset: 0,
          }}
          scale="band"
        />
        <YAxis
          label={{ value: 'Luminosidade', angle: -90, position: 'insideLeft' }}
        />
        <Tooltip />
        <Legend />
        <Area
          type="monotone"
          dataKey="oxigenio_aqua"
          fill="#8884d8"
          stroke="#8884d8"
        />
        <Bar dataKey="temperatura_aquario" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="temperatura_ambiente" stroke="#ff78FF" />
        <Line type="monotone" dataKey="luminosidade" stroke="#ff7300" />
        <Scatter dataKey="ph" fill="red" />
      </ComposedChart>
    </ResponsiveContainer>
  )
}
