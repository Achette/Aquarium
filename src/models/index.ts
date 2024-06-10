import { IconType } from 'react-icons'

export type NewUserProps = {
  username: string
  email: string
  password: string
  repeat_password: string
}

export type UserProps = {
  username: string
  password: string
}

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

export interface GraphsProps {
  created_at: string
  luminosidade: string
  nivel_agua: string
  nivel_oxigenio: string
  saturacao: string
  ph: string
  temperatura: string
}

export type ChartDataProps = {
  dataGraph: {
    created_at: string
    luminosidade: string
    nivel_agua: string
    nivel_oxigenio: string
    ph: string
    temperatura: string
    saturacao: string
  }[]
}

export interface AccessoriesProps {
  created_at: string
  id: string
  name: string
  updated_at: string
}
