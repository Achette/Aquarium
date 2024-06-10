import { useMedia } from '@/hooks'
import { ChartDataProps } from '@/models'
import { Box } from '@chakra-ui/react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

export const SimpleBarChart = ({ dataGraph }: ChartDataProps) => {
  const { isMobileOrTablet } = useMedia()
  return (
    <Box p="1rem" width={isMobileOrTablet ? '100%' : '50%'} height="50%">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={150} height={40} data={dataGraph}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="created_at" />
          <YAxis
            label={{
              value: 'cm',
              offset: 0,
              angle: -90,
            }}
          />
          <Legend />
          <Tooltip />
          <Bar dataKey="nivel_agua" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  )
}
