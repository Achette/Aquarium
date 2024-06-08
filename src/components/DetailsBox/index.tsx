import { BaseBox } from './BaseBox'
import { Flex } from '@chakra-ui/react'
import { DetailBoxProps } from '@/models'
import iconVolt from '@/assets/icons/iconVolt.svg'
import iconFormat from '@/assets/icons/iconFormat.svg'
import iconHeight from '@/assets/icons/iconHeight.svg'
import iconVolume from '@/assets/icons/iconVolume.svg'
import iconThickness from '@/assets/icons/iconThickness.svg'

export const DetailsBox = ({
  material,
  powerSupply,
  thickness,
  height,
  volume,
  pets,
}: DetailBoxProps) => {
  return (
    <Flex flexWrap="wrap" h="auto" gap="1rem" mt="2rem" justifyContent="center">
      {material && <BaseBox icon={iconFormat} data={material} />}
      {powerSupply && (
        <BaseBox icon={iconVolt} data={powerSupply.concat('V')} />
      )}
      {thickness && (
        <BaseBox icon={iconThickness} data={thickness.concat('mm')} />
      )}
      {volume && <BaseBox icon={iconVolume} data={volume} />}
      {height && <BaseBox icon={iconHeight} data={height.concat('cm')} />}
      {pets.length > 0 &&
        pets.map(
          (pet) =>
            pet.quantity > 0 && (
              <BaseBox
                key={pet.species}
                icon={pet.species}
                data={pet.quantity}
                isPet
              />
            )
        )}
    </Flex>
  )
}
