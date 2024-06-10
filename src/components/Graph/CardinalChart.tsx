import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts'
import { curveCardinal } from 'd3-shape'
import { ChartDataProps } from '@/models'
import { useMedia } from '@/hooks'
import { Box } from '@chakra-ui/react'

const cardinal = curveCardinal.tension(0.2)
export const CardinalChart = ({ dataGraph }: ChartDataProps) => {
  const { isMobileOrTablet } = useMedia()

  return (
    <Box p="1rem" width={isMobileOrTablet ? '100%' : '50%'} height="50%">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={dataGraph}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="created_at" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="luminosidade"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.3}
          />
          <Area
            type={cardinal}
            dataKey="saturacao"
            stroke="#82ca9d"
            fill="#82ca9d"
            fillOpacity={0.3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Box>
  )
}
