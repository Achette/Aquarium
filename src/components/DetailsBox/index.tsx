import { BaseBox } from './BaseBox'
import { Flex } from '@chakra-ui/react'
import iconVolt from '../../assets/icons/iconVolt.svg'
import iconFormat from '../../assets/icons/iconFormat.svg'
import iconHeight from '../../assets/icons/iconHeight.svg'
import iconVolume from '../../assets/icons/iconVolume.svg'
import iconThickness from '../../assets/icons/iconThickness.svg'
import iconFish from '../../assets/icons/iconFish.svg'
import iconTurtle from '../../assets/icons/iconTurtle.svg'
import iconFrog from '../../assets/icons/iconFrog.svg'
import iconSnake from '../../assets/icons/iconSnake.svg'

type DetailBoxProps = {
  material: string
  powerSupply: string
  thickness: string
  height: string
  volume: string
  fish: number
  turtle: number
  frog: number
  snake: number
}
export const DetailsBox = ({
  material,
  powerSupply,
  thickness,
  height,
  volume,
  fish,
  turtle,
  frog,
  snake,
}: DetailBoxProps) => {
  return (
    <Flex flexWrap="wrap" h="auto" gap="1rem" mt="2rem" justifyContent="center">
      <BaseBox icon={iconFormat} data={material} />
      <BaseBox icon={iconVolt} data={powerSupply} />
      {thickness && <BaseBox icon={iconThickness} data={thickness} />}
      {volume && <BaseBox icon={iconVolume} data={volume} />}
      {height && <BaseBox icon={iconHeight} data={height} />}
      {fish !== 0 && <BaseBox icon={iconFish} data={fish} />}
      {turtle !== 0 && <BaseBox icon={iconTurtle} data={turtle} />}
      {frog !== 0 && <BaseBox icon={iconFrog} data={frog} />}
      {snake !== 0 && <BaseBox icon={iconSnake} data={snake} />}
    </Flex>
  )
}
