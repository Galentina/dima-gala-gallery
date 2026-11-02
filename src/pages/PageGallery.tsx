import React, { FC } from 'react'
import ImageGallery from 'react-image-gallery'
import { Loader } from '../components/Loader/Loading'
import { useAtomValue } from 'jotai'
import { chosenAlbum } from '../Jotai/chosenAlbum'

export const  PageGallery: FC = () => {
  const album = useAtomValue(chosenAlbum)

  return (
    <div>
      { album &&
        <div className="album">
          <h2 className="album__title">{album?.name}</h2>
          { album?.images.length !== 0
            ? <ImageGallery items={album?.images ?? []}/>
            : <Loader />
          }
        </div>
      }
    </div>
  )
}