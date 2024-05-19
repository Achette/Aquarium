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

export const AquariumInfo = () => {
  const { isDesktop } = useMedia()
  const { id } = useParams()
  const dispatch = useDispatch<AppDispatch>()

  const fetchAquarium = React.useCallback(async () => {
    dispatch(fetchAquariumDetails(id!))
  }, [dispatch, id])

  React.useEffect(() => {
    fetchAquarium()
  }, [fetchAquarium])

  const { material, powerSupply, thickness, height, volume } =
    useSelector(getAquariumDetails)

  return (
    <Box pt="1.5rem" px={isDesktop ? '16%' : '0.5rem'}>
      <AquariumDetailsTopBar />
      <DetailsBox
        material={material}
        powerSupply={powerSupply}
        thickness={thickness}
        height={height}
        volume={volume}
      />
    </Box>
  )
}
