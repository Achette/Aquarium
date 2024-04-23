import Slider from 'react-slick'
import { SlideCard } from '../Slide'
import { Box } from '@chakra-ui/react'
import 'slick-carousel/slick/slick.css'
import { slider } from '@/mock/sliderMock'
import 'slick-carousel/slick/slick-theme.css'

export const BenefitsSlider = () => {
  const data = slider

  const settings = {
    className: 'center',
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  }

  return (
    <Box
      sx={{
        '.slick-dots li button': {
          _before: {
            w: '0.5rem',
            h: '0.5rem',
            transition: '0.2s',
            content: "''",
            borderRadius: '100%',
            background: 'blue.900',
          },
        },
      }}
    >
      <Slider {...settings}>
        {data.map((item, index) => (
          <SlideCard key={index} content={item.content} />
        ))}
      </Slider>
    </Box>
  )
}
