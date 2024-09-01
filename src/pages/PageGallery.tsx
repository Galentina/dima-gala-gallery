import React, { FC } from 'react'
import ImageGallery from 'react-image-gallery'
import { useRecoilValue } from 'recoil'
import { chosenAlbum } from '../Recoil/Atoms/chosenAlbum'
import { Loader } from '../components/Loader/Loading'

export const  PageGallery: FC = () => {
  const album = useRecoilValue(chosenAlbum)

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