import { HStack } from '@chakra-ui/react'
import { SensorInfoBox } from './SensorInfoBox'

import iconTemp from '../../assets/icons/iconTemp.svg'
import iconSat from '../../assets/icons/iconSat.svg'
import iconPH from '../../assets/icons/iconPh.svg'
import iconLevel from '../../assets/icons/iconWaterLevel.svg'
import iconLimini from '../../assets/icons/iconLumini.svg'
import iconClear from '../../assets/icons/iconClean.svg'
import iconFeed from '../../assets/icons/iconFeed.svg'

export const SensorDetails = () => {
  return (
    <HStack
      flexWrap="wrap"
      h="auto"
      gap="1rem"
      mt="2rem"
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
        icon={iconLimini}
        description="Luminosidade"
        info="35 lm"
      />
      <SensorInfoBox
        icon={iconClear}
        description="Última Limpeza"
        info="16/04/2024"
      />
      <SensorInfoBox
        icon={iconFeed}
        description="Última Alimentação"
        info="23/04/2024 | 12:00"
      />
    </HStack>
  )
}
