import React, { SetStateAction } from 'react'

interface AppContextProps {
  format: string
  setFormat: React.Dispatch<SetStateAction<string>>
  material: string
  setMaterial: React.Dispatch<SetStateAction<string>>
  powerSupply: string
  setPowerSupply: React.Dispatch<SetStateAction<string>>
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

  return (
    <AquariumContext.Provider
      value={{
        format,
        setFormat,
        material,
        setMaterial,
        powerSupply,
        setPowerSupply,
      }}
    >
      {children}
    </AquariumContext.Provider>
  )
}

export const useAquarium = () =>
  React.useContext<AppContextProps>(AquariumContext)
