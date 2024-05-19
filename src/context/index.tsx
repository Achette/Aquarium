import React, { SetStateAction } from 'react'

interface AppContextProps {
  format: string
  setFormat: React.Dispatch<SetStateAction<string>>
  material: string
  setMaterial: React.Dispatch<SetStateAction<string>>
  powerSupply: string
  setPowerSupply: React.Dispatch<SetStateAction<string>>
  thickness: number
  setThickness: React.Dispatch<SetStateAction<number>>
  height: number
  setHeight: React.Dispatch<SetStateAction<number>>
  volume: number
  setVolume: React.Dispatch<SetStateAction<number>>
}

type AppProviderProps = {
  children: React.ReactNode
}

export const AquariumContext = React.createContext<AppContextProps>(
  {} as AppContextProps
)

export function AquariumProvider({ children }: AppProviderProps) {
  const [format, setFormat] = React.useState<string>('')
  const [material, setMaterial] = React.useState<string>('')
  const [powerSupply, setPowerSupply] = React.useState('')
  const [thickness, setThickness] = React.useState(0)
  const [height, setHeight] = React.useState(0)
  const [volume, setVolume] = React.useState(0)

  return (
    <AquariumContext.Provider
      value={{
        format,
        setFormat,
        material,
        setMaterial,
        powerSupply,
        setPowerSupply,
        thickness,
        setThickness,
        height,
        setHeight,
        volume,
        setVolume,
      }}
    >
      {children}
    </AquariumContext.Provider>
  )
}

export const useAquarium = () =>
  React.useContext<AppContextProps>(AquariumContext)
