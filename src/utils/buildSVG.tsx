import rectangular from '../assets/icons/format1.svg'
import circle from '../assets/icons/format2.svg'
import hex from '../assets/icons/format3.svg'

import iconFish from '../assets/icons/iconFish.svg'
import iconTurtle from '../assets/icons/iconTurtle.svg'
import iconFrog from '../assets/icons/iconFrog.svg'
import iconSnake from '../assets/icons/iconSnake.svg'

export const BuildSVG = (name: string | undefined) => {
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
    }
  }
  return ''
}
