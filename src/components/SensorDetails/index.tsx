import { useMedia } from '@/hooks'
import { HStack } from '@chakra-ui/react'
import iconPH from '@/assets/icons/iconPh.svg'
import { SensorInfoBox } from './SensorInfoBox'
import iconSat from '@/assets/icons/iconSat.svg'
import iconTemp from '@/assets/icons/iconTemp.svg'
import iconFeed from '@/assets/icons/iconFeed.svg'
import iconClear from '@/assets/icons/iconClean.svg'
import iconLumini from '@/assets/icons/iconLumini.svg'
import iconLevel from '@/assets/icons/iconWaterLevel.svg'

type SensorDetailsProps = {
  cleanDate: string
  feedDate: string
}

export const SensorDetails = ({ cleanDate, feedDate }: SensorDetailsProps) => {
  const { isMobile } = useMedia()

  return (
    <HStack
      flexWrap="wrap"
      h="auto"
      gap="1rem"
      pt={`${isMobile}` ? '1.5rem' : '3rem'}
      justifyContent="center"
    >
      <SensorInfoBox icon={iconTemp} description="Temperatura" info="27 C" />
      <SensorInfoBox icon={iconSat} description="Saturação" info="9,07 ppm" />
      <SensorInfoBox icon={iconPH} description="pH" info="7" />
      <SensorInfoBox
        icon={iconLevel}
        description="Variação Nível Água"
        info="17,5 ml"
      />
      <SensorInfoBox
        icon={iconLumini}
        description="Luminosidade"
        info="35 lm"
      />
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
