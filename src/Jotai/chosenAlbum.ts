import { atom } from 'jotai'

export interface IChosenAlbum {
  id: string,
  name: string,
  cover: string,
  images: { original: string,
    thumbnail: string }[],
}

export const chosenAlbum = atom<IChosenAlbum | null>(null)
