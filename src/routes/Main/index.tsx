import React from 'react'
import { useMedia } from '@/hooks'
import { AquariumProps } from '@/models'
import { Link } from 'react-router-dom'
import { BuildSVG } from '@/utils/buildSVG'
import { AddButton, Header } from '@/components'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import {
  deleteAquariumById,
  getAllAquariums,
} from '@/services/aquarium-services'
import {
  Box,
  HStack,
  Image,
  Text,
  VStack,
  Icon,
  Link as ChakraLink,
  Flex,
  useToast,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  Button,
} from '@chakra-ui/react'

export const Main = () => {
  const toast = useToast()
  const { isMobile, isMobileOrTablet } = useMedia()
  const [aquariums, setAquariums] = React.useState<AquariumProps[]>()

  const { isOpen, onOpen, onClose } = useDisclosure()

  const fetchAquariums = React.useCallback(async () => {
    try {
      const response = await getAllAquariums()
      setAquariums(response.data)
    } catch (e) {
      console.log(e)
    }
  }, [])

  React.useEffect(() => {
    fetchAquariums()
  }, [fetchAquariums])

  const handleDeleteAquarium = async (id: string, name: string) => {
    try {
      await deleteAquariumById(id)
      fetchAquariums()
      toast({
        description: `Aquário '${name}' foi apagado!`,
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
        duration: 2000,
      })
    } catch (e) {
      toast({
        description: 'Não foi possível apagar o aquário',
        status: 'error',
        containerStyle: { color: 'white' },
        position: isMobileOrTablet ? 'top' : 'bottom-right',
        isClosable: true,
      })
    }
  }

  return (
    <Box>
      <Header />
      <VStack h="calc(100vh - 4rem)" alignItems="center" mt="2rem">
        {aquariums &&
          aquariums.map((aquarium, index) => (
            <HStack
              key={index}
              maxWidth="58rem"
              w="full"
              px={isMobile ? '2rem' : '1rem'}
              mb="1rem"
            >
              <HStack
                w="full"
                h={isMobile ? '3.5rem' : '4.75rem'}
                border="2px solid #0157A3"
                p="0.25rem 1.25rem 0.25rem 1rem"
                borderRadius="100"
                justifyContent="space-between"
              >
                <Flex gap="1rem" alignItems="center">
                  <Image
                    src={BuildSVG(aquarium.format_aquarium)}
                    w={isMobile ? '2.5rem' : '3.75rem'}
                    h={isMobile ? '2.5rem' : '3.75rem'}
                  />
                  <Text
                    fontSize={isMobile ? '1.375rem' : '1.5rem'}
                    color="blue.900"
                    fontWeight={700}
                    cursor="pointer"
                  >
                    <ChakraLink
                      as={Link}
                      to={`/aquarium/${aquarium.id}`}
                      _hover={{ textDecoration: 'none' }}
                    >
                      {aquarium.name}
                    </ChakraLink>
                  </Text>
                </Flex>
                <Icon
                  as={RiDeleteBin6Fill}
                  color="blue.900"
                  opacity="0.8"
                  cursor="pointer"
                  h="1.5rem"
                  w="1.25rem"
                  _hover={{ color: 'red.700' }}
                  onClick={() => onOpen()}
                />
              </HStack>
              <Modal
                blockScrollOnMount={false}
                isOpen={isOpen}
                onClose={onClose}
              >
                <ModalContent bgColor="white" w={isMobile ? '22rem' : ''}>
                  <ModalHeader color="blue.900">Excluir item?</ModalHeader>
                  <ModalBody>
                    <Text fontWeight="medium" mb="1rem" color="blue.900">
                      Tem certeza que deseja excluir permanentemente o aquário{' '}
                      <strong>{aquarium.name}</strong>?
                    </Text>
                  </ModalBody>
                  <ModalFooter>
                    <Button
                      colorScheme="blue"
                      mr={3}
                      onClick={() =>
                        handleDeleteAquarium(aquarium.id, aquarium.name)
                      }
                    >
                      Confirmar exclusão
                    </Button>
                    <Button variant="ghost" color="red.400" onClick={onClose}>
                      Cancelar
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </HStack>
          ))}

        {!aquariums?.length && (
          <Text color="blue.900" margin="auto">
            Nenhum aquário cadastrado 😿
          </Text>
        )}
      </VStack>

      <AddButton />
    </Box>
  )
}
