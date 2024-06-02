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
  format_aquarium: string
  material: string
  thickness: string
  capacity: string
  height: string
  voltage: string
}

export interface Animal {
  id: string
  species: string
  quantity: number
  created_at: string
  updated_at: string
}

export type DetailBoxProps = {
  material: string
  powerSupply: string
  thickness: string
  height: string
  volume: string
  pets: Animal[]
}