import rectangular from '@/assets/icons/format1.svg'
import circle from '@/assets/icons/format2.svg'
import hex from '@/assets/icons/format3.svg'

import iconFish from '@/assets/icons/iconFish.svg'
import iconFrog from '@/assets/icons/iconFrog.svg'
import iconSnake from '@/assets/icons/iconSnake.svg'
import iconTurtle from '@/assets/icons/iconTurtle.svg'

import thermostat from '@/assets/img/accessories/3_thermostat.svg'
import waterPump from '@/assets/img/accessories/1_waterPump.svg'
import feeder from '@/assets/img/accessories/2_feeder.svg'
import filter from '@/assets/img/accessories/4_filter.svg'
import led from '@/assets/img/accessories/5_led.svg'

import iconPH from '@/assets/icons/iconPh.svg'
import iconSat from '@/assets/icons/iconSat.svg'
import iconTemp from '@/assets/icons/iconTemp.svg'
import iconLumini from '@/assets/icons/iconLumini.svg'
import iconLevel from '@/assets/icons/iconWaterLevel.svg'

import { BsSliders } from 'react-icons/bs'
import { VscGraphLine } from 'react-icons/vsc'

export const BuildSVG = (name: string) => {
  if (name) {
    switch (name) {
      case 'Retangular':
        return rectangular

      case 'Curvo':
        return circle

      case 'Sextavado':
        return hex

      case 'Peixe':
        return iconFish

      case 'Tartaruga':
        return iconTurtle

      case 'Sapo':
        return iconFrog

      case 'Cobra':
        return iconSnake

      case 'Bombinha':
        return waterPump

      case 'Alimentador automático':
        return feeder

      case 'Termostato / Aquecedor':
        return thermostat

      case 'Filtro':
        return filter

      case 'Luz LED':
        return led

      case 'pH':
        return iconPH

      case 'Nível de água':
        return iconLevel

      case 'Saturação':
        return iconSat

      case 'Luminosidade':
        return iconLumini

      case 'Temperatura':
        return iconTemp
    }
  }
  return ''
}

export const BuildIconType = (name: string) => {
  switch (name) {
    case 'Controles':
      return BsSliders

    case 'Dashboards':
      return VscGraphLine
  }
}
