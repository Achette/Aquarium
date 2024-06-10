import { BuildSVG } from '@/utils'
import { useMedia } from '@/hooks'
import { deleteAquariumById } from '@/services/aquarium-services'
import {
  Flex,
  HStack,
  Image,
  Text,
  Link as ChakraLink,
  useDisclosure,
  Modal,
  Icon,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useToast,
} from '@chakra-ui/react'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

type AquariumListProps = {
  id: string
  name: string
  format: string
  fetchAquariums: () => Promise<void>
}

export const AquariumList = ({
  id,
  name,
  format,
  fetchAquariums,
}: AquariumListProps) => {
  const { isMobile, isMobileOrTablet } = useMedia()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  const handleDeleteAquarium = async (id: string) => {
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
    <HStack maxWidth="58rem" w="full" px={isMobile ? '2rem' : '1rem'} mb="1rem">
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
            src={BuildSVG(format)}
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
              to={`/aquarium/${id}`}
              _hover={{ textDecoration: 'none' }}
            >
              {name}
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
      
      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalContent bgColor="white" w={isMobile ? '22rem' : ''}>
          <ModalHeader color="blue.900">Excluir item?</ModalHeader>
          <ModalBody>
            <Text fontWeight="medium" mb="1rem" color="blue.900">
              Tem certeza que deseja excluir permanentemente o aquário{' '}
              <strong>{name}</strong>?
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => handleDeleteAquarium(id)}
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
  )
}
