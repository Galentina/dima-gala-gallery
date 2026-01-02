import { albumCover, fileNames } from '../helpers/fileNaming'

export const ALBUMS_2025 = [
  {
    id: 'valencia',
    name: 'Valencia',
    cover: albumCover('2025', 'valencia', 3),
    images: fileNames({ album: 'valencia', n: 185, type: 'jpg', year: '2025' }),
  },
  {
    id: 'de_haar',
    name: 'Kasteel de Haar',
    cover: albumCover('2025', 'de_haar', 3),
    images: fileNames({ album: 'de_haar', n: 61, type: 'jpg', year: '2025' }),
  },
  {
    id: 'haarlem',
    name: 'Haarlem',
    cover: albumCover('2025', 'haarlem', 4),
    images: fileNames({ album: 'haarlem', n: 29, type: 'jpg', year: '2025' }),
  },
  {
    id: 'nice_25',
    name: 'Nice-2025',
    cover: albumCover('2025', 'nice_25', 46),
    images: fileNames({ album: 'nice_25', n: 134, type: 'jpg', year: '2025' }),
  },
  {
    id: 'leiden',
    name: 'Leiden',
    cover: albumCover('2025', 'leiden', 3),
    images: fileNames({ album: 'leiden', n: 60, type: 'jpg', year: '2025' }),
  },
  {
    id: 'nl_25',
    name: 'Netherlands-2025',
    cover: albumCover('2025', 'nl_25', 3),
    images: fileNames({ album: 'nl_25', n: 67, type: 'jpg', year: '2025' }),
  },
  {
    id: 'uk_25',
    name: 'UK-2025',
    cover: albumCover('2025', 'uk_25', 138),
    images: fileNames({ album: 'uk_25', n: 263, type: 'jpg', year: '2025' }),
  },
]