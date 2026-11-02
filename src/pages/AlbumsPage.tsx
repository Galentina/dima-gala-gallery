import React, { FC } from 'react'
import './albumsPage.scss'
import { ALL_YEARS } from '../constants/years'
import { ALL_ALBUMS } from '../constants/AllAlbumsConstant'
import { useAtom } from 'jotai'
import { chosenAlbum, IChosenAlbum } from '../Jotai/chosenAlbum'
import { isAlbumVisible } from '../Jotai/isAlbumVisible'

export const AlbumsPage: FC <{ albums: string }> = ({ albums }) => {
  const [, setAlbum] = useAtom(chosenAlbum)
  const [, setHasAlbum] = useAtom(isAlbumVisible)

  const albumParent = ALL_YEARS.find(el => el.year === albums)?.parent ?? ''
  const albumData = ALL_ALBUMS.find(el => el.id === albumParent)?.albums

  const albumsHandler = (id: string) => {
    const currentAlbum = albumData?.find(el => el.id === id)
    setHasAlbum(false)
    setAlbum(currentAlbum as IChosenAlbum)
  }

  return (
    <div className="albums-page">
      <div className="albums-page__albums-set-box">
        {albumData?.map(item => {
          return (
            <div key={item.id} className="albums-page__album-box">
              <div className="albums-page__albumtitles">{item.name}</div>
              <img src={item.cover} alt={item.name} className="albums-page__cover"
                onClick={() => albumsHandler(item.id)}/>
            </div>
          )
        })}
      </div>
    </div>
  )
}