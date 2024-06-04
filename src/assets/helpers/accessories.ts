import Light from '@/assets/img/accessories/5_led.svg'
import Plants from '@/assets/img/accessories/6_plant.svg'
import Feeder from '@/assets/img/accessories/2_feeder.svg'
import Filter from '@/assets/img/accessories/4_filter.svg'
import WaterPump from '@/assets/img/accessories/1_waterPump.svg'
import Thermostat from '@/assets/img/accessories/3_thermostat.svg'

export const aquariumAccessories = [
  {
    id: 1,
    name: 'Bombinha',
    img: WaterPump,
    selected: false,
  },
  {
    id: 2,
    name: 'Alimentador automático',
    img: Feeder,
    selected: false,
  },
  {
    id: 3,
    name: 'Termostato / Aquecedor',
    img: Thermostat,
    selected: false,
  },
  {
    id: 4,
    name: 'Filtro',
    img: Filter,
    selected: false,
  },
  {
    id: 5,
    name: 'Luz LED',
    img: Light,
    selected: false,
  },
  {
    id: 6,
    name: 'Plantas naturais',
    img: Plants,
    selected: false,
  },
]
