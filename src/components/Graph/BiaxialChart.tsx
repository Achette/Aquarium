import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import { useMedia } from '@/hooks'
import { ChartDataProps } from '@/models'

export const BiaxialGraph = ({ dataGraph }: ChartDataProps) => {
  const { isMobileOrTablet } = useMedia()

  return (
    <ResponsiveContainer width={isMobileOrTablet ? '100%' : '50%'} height="50%">
      <BarChart
        width={500}
        height={300}
        data={dataGraph}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="created_at" />
        <YAxis
          yAxisId="left"
          orientation="left"
          stroke="#8884d8"
          label={{
            value: 'ºC',
            offset: 0,
            angle: -90,
          }}
        />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="temperatura" fill="#8884d8" />
        <Bar yAxisId="right" dataKey="ph" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  )
}
