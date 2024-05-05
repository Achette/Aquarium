import { IconType } from 'react-icons'

export type NewAquariumProps = {
  name: string
}

export type FormatProps = {
  id: number
  format: string
  icon: string
  active: boolean
}

export type MaterialProps = {
  id: number
  name: string
  active: boolean
}

export type PowerSupplyProps = {
  id: number
  volts: string
  icon: IconType | undefined
  active: boolean
}

export type AquariumProps = {
  id: string
  name: string
  format: string
  material: string
  powerSupply: string
}
