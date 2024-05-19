import { BaseBox } from './BaseBox'
import { Flex } from '@chakra-ui/react'
import iconVolt from '../../assets/icons/iconVolt.svg'
import iconFormat from '../../assets/icons/iconFormat.svg'
import iconHeight from '../../assets/icons/iconHeight.svg'
import iconVolume from '../../assets/icons/iconVolume.svg'
import iconThickness from '../../assets/icons/iconThickness.svg'

type DetailBoxProps = {
  material: string
  powerSupply: string
  thickness: string
  height: string
  volume: string
}
export const DetailsBox = ({
  material,
  powerSupply,
  thickness,
  height,
  volume,
}: DetailBoxProps) => {
  return (
    <Flex flexWrap="wrap" h="auto" gap="1rem" mt="2rem" justifyContent="center">
      <BaseBox icon={iconFormat} data={material} />
      <BaseBox icon={iconVolt} data={powerSupply} />
      {thickness && <BaseBox icon={iconThickness} data={thickness} />}
      {volume && <BaseBox icon={iconVolume} data={volume} />}
      {height && <BaseBox icon={iconHeight} data={height} />}
    </Flex>
  )
}
