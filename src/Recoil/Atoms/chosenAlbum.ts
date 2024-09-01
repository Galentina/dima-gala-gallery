import { atom } from 'recoil'

export interface IChosenAlbum {
  id: string,
  name: string,
  cover: string,
  images: { original: string,
    thumbnail: string }[],
}
export const chosenAlbum = atom<IChosenAlbum | null>({
  key: 'chosenAlbum',
  default: null,
})