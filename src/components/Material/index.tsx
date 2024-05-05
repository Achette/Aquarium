import React from 'react'
import { useAquarium } from '@/context'
import { MaterialProps } from '@/models'
import { HStack, Heading, Text, VStack } from '@chakra-ui/react'

export const AquariumMaterial = () => {
  const [selectedMaterial, setSelectedMaterial] = React.useState<MaterialProps>(
    { id: 0, name: '', active: false }
  )

  const { setMaterial } = useAquarium()

  const [materials, setMaterials] = React.useState<MaterialProps[]>([
    {
      id: 1,
      name: 'Vidro',
      active: true,
    },
    {
      id: 2,
      name: 'Acrílico',
      active: false,
    },
    {
      id: 3,
      name: 'Plástico',
      active: false,
    },
  ])
  React.useEffect(() => {
    if (!selectedMaterial?.name) {
      setSelectedMaterial(materials[0])
    }

    materials
  }, [materials, selectedMaterial])

  const handleSetActive = (id: number) => {
    const updatedMaterials = materials.map((material) => {
      if (material.id === id) {
        return { ...material, active: true }
      } else {
        return { ...material, active: false }
      }
    })
    setMaterials(updatedMaterials)
  }

  const handleSelectMaterial = (material: MaterialProps) => {
    setSelectedMaterial(material)
    handleSetActive(material.id)
  }

  setMaterial(selectedMaterial.name)

  return (
    <VStack w="20.5rem" alignItems="flex-start" mt="1.5rem">
      <Heading as="h3" color="blue.900" fontSize="1.5rem">
        Material
      </Heading>
      <HStack>
        {materials.map((material) => (
          <HStack
            key={material.id}
            cursor="pointer"
            onClick={() => handleSelectMaterial(material)}
          >
            <HStack
              border="2px solid #0157A3"
              p=".25rem .5rem"
              borderRadius=".25rem"
              opacity={material.active ? 'none' : '50%'}
            >
              <Text fontSize="0.75rem" color="blue.900" opacity="60%">
                {material.name}
              </Text>
            </HStack>
          </HStack>
        ))}
      </HStack>
    </VStack>
  )
}
