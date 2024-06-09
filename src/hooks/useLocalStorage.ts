/* 
    TOKEN
*/

import {
  AQUARIUM_ID,
  TOKEN_KEY,
  USER_KEY,
  USER_KEY_ID,
} from '@/constants/system'

export const saveToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token)
}

export const getAccessToken = (): string | null => {
  return localStorage.getItem(TOKEN_KEY)
}

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY)
}

/*
    USER ID
*/

export const saveUserId = (token: string) => {
  localStorage.setItem(USER_KEY_ID, token)
}

export const getUserId = (): string | null => {
  return localStorage.getItem(USER_KEY_ID)
}

export const removeUserId = () => {
  localStorage.removeItem(USER_KEY_ID)
}

/*
    USER
*/

export const saveUser = (token: string) => {
  localStorage.setItem(USER_KEY, token)
}

export const getUser = (): string | null => {
  return localStorage.getItem(USER_KEY)
}

export const removeUser = () => {
  localStorage.removeItem(USER_KEY)
}

/*
    AQUARIUM ID
*/

export const saveAquariumId = (token: string) => {
  localStorage.setItem(AQUARIUM_ID, token)
}

export const getAquariumId = (): string | null => {
  return localStorage.getItem(AQUARIUM_ID)
}

export const removeAquariumId = () => {
  return localStorage.removeItem(AQUARIUM_ID)
}
