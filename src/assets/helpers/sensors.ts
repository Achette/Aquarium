import insideTemperature from '@/assets/img/sensors/6_inside_temperature.svg'
import outsideTemperature from '@/assets/img/sensors/5_outside_temperature.svg'
import luminosity from '@/assets/img/sensors/1_luminosity.svg'
import waterLevel from '@/assets/img/sensors/3_water_level.svg'
import pH from '@/assets/img/sensors/4_ph.svg'

export const aquariumSensors = [
  {
    id: 1,
    name: 'Luminosidade',
    img: luminosity,
    selected: false,
  },
  {
    id: 2,
    name: 'Nível de água',
    img: waterLevel,
    selected: false,
  },
  {
    id: 3,
    name: 'pH',
    img: pH,
    selected: false,
  },
  {
    id: 4,
    name: 'Temperatura',
    img: outsideTemperature,
    selected: false,
  },
  {
    id: 5,
    name: 'Saturação',
    img: insideTemperature,
    selected: false,
  },
]
