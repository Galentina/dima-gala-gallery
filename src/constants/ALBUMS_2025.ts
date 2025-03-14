import { albumCover, fileNames } from '../helpers/fileNaming'

export const ALBUMS_2025 = [
  {
    id: 'valencia',
    name: 'Valencia',
    cover: albumCover('2025', 'valencia', 3),
    images: fileNames({ album: 'valencia', n: 185, type: 'jpg', year: '2025' }),
  },
]