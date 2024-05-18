import React from 'react'
import { useMedia } from '@/hooks'
import { Box } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { AppDispatch } from '@/redux/store'
import { useDispatch } from 'react-redux'
import { AquariumDetailsTopBar, DetailsBox } from '@/components'
import { fetchAquariumDetails } from '@/redux/reducers/aquariumDetails'

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

  return (
    <Box pt="1.5rem" px={isDesktop ? '16%' : '0.5rem'}>
      <AquariumDetailsTopBar />
      <DetailsBox />
    </Box>
  )
}
