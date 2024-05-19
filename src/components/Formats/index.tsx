import React from 'react'
import { FormatProps } from '@/models'
import { useAquarium } from '@/context'
import hex from '../../assets/icons/format3.svg'
import circle from '../../assets/icons/format2.svg'
import rectangular from '../../assets/icons/format1.svg'
import { HStack, Heading, Image, Text, VStack } from '@chakra-ui/react'

export const AquariumFormats = () => {
  const [selectFormat, setSelectFormat] = React.useState<FormatProps>({
    id: 0,
    active: false,
    format: '',
    icon: '',
  })
  
  const [formats, setFormats] = React.useState<FormatProps[]>([
    {
      id: 1,
      format: 'Retangular',
      icon: rectangular,
      active: true,
    },
    {
      id: 2,
      format: 'Curvo',
      icon: circle,
      active: false,
    },
    {
      id: 3,
      format: 'Sextavado',
      icon: hex,
      active: false,
    },
  ])
  const { setFormat } = useAquarium()

  React.useEffect(() => {
    if (!selectFormat.format) {
      setSelectFormat(formats[0])
    }

    formats
  }, [formats, selectFormat])

  const hanldleActive = (id: number) => {
    const updatedFormats = formats.map((format) => {
      if (format.id === id) {
        return { ...format, active: true }
      } else {
        return { ...format, active: false }
      }
    })
    setFormats(updatedFormats)
  }

  const handleSelectFormat = (format: FormatProps) => {
    setSelectFormat(format)
    hanldleActive(format.id)
  }

  setFormat(selectFormat.format)

  return (
    <VStack w="20.5rem" alignItems="flex-start">
      <Heading as="h3" color="blue.900" fontSize="1.5rem">
        Formato
      </Heading>
      <HStack>
        {formats.map((format) => (
          <HStack
            key={format.id}
            cursor="pointer"
            onClick={() => handleSelectFormat(format)}
          >
            <HStack
              border="2px solid #0157A3"
              p=".25rem .5rem"
              borderRadius=".25rem"
              opacity={format.active ? 'none' : '50%'}
            >
              <Image src={format.icon} />
              <Text fontSize="0.75rem" color="blue.900" opacity="60%">
                {format.format}
              </Text>
            </HStack>
          </HStack>
        ))}
      </HStack>
    </VStack>
  )
}
