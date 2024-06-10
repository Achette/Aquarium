import { useMedia } from '@/hooks'
import { useSelector } from 'react-redux'
import { HStack } from '@chakra-ui/react'
import { SensorInfoBox } from './SensorInfoBox'
import iconFeed from '@/assets/icons/iconFeed.svg'
import iconClear from '@/assets/icons/iconClean.svg'
import { BuildMetricsValue, BuildSVG } from '@/utils'
import { getSensorsByAquariumId } from '@/redux/reducers/sensorsDetails'

type SensorDetailsProps = {
  cleanDate: string
  feedDate: string
}

export const SensorDetails = ({ cleanDate, feedDate }: SensorDetailsProps) => {
  const { isMobile } = useMedia()

  const sensors = useSelector(getSensorsByAquariumId)

  return (
    <HStack
      flexWrap="wrap"
      h="auto"
      gap="1rem"
      pt={`${isMobile}` ? '1.5rem' : '3rem'}
      justifyContent="center"
    >
      {sensors.map((sensor) => (
        <SensorInfoBox
          key={sensor.id}
          icon={BuildSVG(sensor.name)}
          description={sensor.name}
          info={BuildMetricsValue(
            sensor.name,
            sensor.current.replace(',', '.')
          )}
        />
      ))}

      <SensorInfoBox
        icon={iconClear}
        description="Última Limpeza"
        info={cleanDate}
      />
      <SensorInfoBox
        icon={iconFeed}
        description="Última Alimentação"
        info={feedDate}
      />
    </HStack>
  )
}
