import { useMedia } from '@/hooks'
import { ChartDataProps } from '@/models'
import { Box } from '@chakra-ui/react'
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

export const TwoLinesChart = ({ dataGraph }: ChartDataProps) => {
  const { isMobileOrTablet } = useMedia()

  return (
    <Box p="1rem" width={isMobileOrTablet ? '100%' : '50%'} height="50%">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={dataGraph}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="created_at" padding={{ left: 30, right: 30 }} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="saturacao"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="ph" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </Box>
  )
}
