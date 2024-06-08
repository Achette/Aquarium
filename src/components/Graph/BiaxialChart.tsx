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
import { dados } from '../../assets/helpers/dados'
import { useMedia } from '@/hooks'

export const BiaxialGraph = () => {
    const {isMobileOrTablet} = useMedia()
  return (
    <ResponsiveContainer width={isMobileOrTablet ? '100%' : '40%'} height="55%">
      <BarChart
        width={500}
        height={300}
        data={dados}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="data_hora" />
        <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
        <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
        <Tooltip />
        <Legend />
        <Bar yAxisId="left" dataKey="temperatura_aquario" fill="#8884d8" />
        <Bar yAxisId="right" dataKey="ph" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  )
}
