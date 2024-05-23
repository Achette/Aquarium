import rectangular from '../assets/icons/format1.svg'
import circle from '../assets/icons/format2.svg'
import hex from '../assets/icons/format3.svg'

export const BuildSVG = (name: string | undefined) => {
  if (name) {
    switch (name) {
      case 'Retangular':
        return rectangular

      case 'Curvo':
        return circle

      case 'Sextavado':
        return hex
    }
  }
  return ''
}
