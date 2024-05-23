import React from 'react'
import { useMedia } from '@/hooks'
import { Box } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { AppDispatch } from '@/redux/store'
import { useDispatch, useSelector } from 'react-redux'
import { AquariumDetailsTopBar, DetailsBox } from '@/components'
import {
  fetchAquariumDetails,
  getAquariumDetails,
} from '@/redux/reducers/aquariumDetails'
import {
  fetchPetsByAquariumId,
  getPetsByAquariumId,
} from '@/redux/reducers/petsDetails'


export const AquariumInfo = () => {
  const { isDesktop } = useMedia()
  const { id } = useParams()
  const dispatch = useDispatch<AppDispatch>()

  const fetchAquarium = React.useCallback(async () => {
    dispatch(fetchAquariumDetails(id!))
    dispatch(fetchPetsByAquariumId(id!))
  }, [dispatch, id])

  React.useEffect(() => {
    fetchAquarium()
  }, [fetchAquarium])

  const { material, powerSupply, thickness, height, volume } =
    useSelector(getAquariumDetails)

  const { pets } = useSelector(getPetsByAquariumId)
  const { Peixe, Tartaruga, Cobra, Sapo } = pets[0]

  return (
    <Box pt="1.5rem" px={isDesktop ? '16%' : '0.5rem'}>
      <AquariumDetailsTopBar />
      <DetailsBox
        material={material}
        powerSupply={powerSupply}
        thickness={thickness}
        height={height}
        volume={volume}
        fish={Peixe.quantity}
        turtle={Tartaruga.quantity}
        frog={Sapo.quantity}
        snake={Cobra.quantity}
      />
    </Box>
  )
}
