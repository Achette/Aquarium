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
  resetAquarium,
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
    dispatch(resetAquarium())
    fetchAquarium()
  }, [dispatch, fetchAquarium])
  const details = useSelector(getAquariumDetails)

  const pets = useSelector(getPetsByAquariumId)

  return (
    <Box pt="1.5rem" px={isDesktop ? '16%' : '0.5rem'}>
      <AquariumDetailsTopBar />
      <DetailsBox
        material={details.material}
        powerSupply={details.voltage}
        thickness={details.thickness}
        height={details.height}
        volume={details.volume}
        pets={pets}
      />
    </Box>
  )
}
