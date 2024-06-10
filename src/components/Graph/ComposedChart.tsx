import { ChartDataProps } from '@/models'
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

export const ComposedChartWithAxisLabels = ({ dataGraph }: ChartDataProps) => {

  return (
    <ResponsiveContainer width="85%" height="50%">
      <ComposedChart
        width={500}
        height={400}
        data={dataGraph}
        margin={{
          top: 20,
          right: 80,
          bottom: 20,
          left: 20,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis
          dataKey="created_at"
          label={{
            value: 'Dia/Hora',
            position: 'insideBottomRight',
            offset: 0,
          }}
          scale="band"
        />
        <YAxis label={{ value: '', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        {dataGraph[0].nivel_agua && (
          <Area
            type="monotone"
            dataKey="nivel_agua"
            fill="#8884d8"
            stroke="#8884d8"
          />
        )}
        {dataGraph[0].temperatura && (
          <Bar dataKey="temperatura" barSize={20} fill="#413ea0" />
        )}
        {dataGraph[0].luminosidade && (
          <Line type="monotone" dataKey="luminosidade" stroke="#ff78FF" />
        )}
        {dataGraph[0].saturacao && (
          <Line type="monotone" dataKey="saturacao" stroke="#ff7300" />
        )}
        {dataGraph[0].ph && <Scatter dataKey="ph" fill="red" />}
      </ComposedChart>
    </ResponsiveContainer>
  )
}
