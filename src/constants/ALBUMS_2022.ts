import { albumCover, fileNames } from '../helpers/fileNaming'

export const ALBUMS_2022 = [
  {
    id: 'zurich',
    name: 'Zurich',
    cover: albumCover('2022', 'zurich', 16),
    images: fileNames({ album: 'zurich', n: 166, type: 'jpg', year: '2022' }),
  },
  {
    id: 'keukenhof2022',
    name: 'Keukenhof - 2022',
    cover: albumCover('2022', 'keukenhof2022', 1),
    images: fileNames({ album: 'keukenhof2022', n: 69, type: 'jpg', year: '2022' }),
  },
  {
    id: 'hertogenbosch',
    name: 'Hertogenbosch',
    cover: albumCover('2022', 'hertogenbosch', 1),
    images: fileNames({ album: 'hertogenbosch', n: 42, type: 'jpg', year: '2022' }),
  },
  {
    id: 'brussels2022',
    name: 'Brussels - 2022',
    cover: albumCover('2022', 'brussels2022', 1),
    images: fileNames({ album: 'brussels2022', n: 29, type: 'jpg', year: '2022' }),
  },
  {
    id: 'spain2022',
    name: 'Spain 2022',
    cover: albumCover('2022', 'spain2022', 1),
    images: fileNames({ album: 'spain2022', n: 163, type: 'jpg', year: '2022' }),
  },
  {
    id: 'liguria',
    name: 'Liguria',
    cover: albumCover('2022', 'liguria', 1),
    images: fileNames({ album: 'liguria', n: 85, type: 'jpg', year: '2022' }),
  },
  {
    id: 'venezia2022',
    name: 'Venezia 2022',
    cover: albumCover('2022', 'venezia2022', 1),
    images: fileNames({ album: 'venezia2022', n: 206, type: 'jpg', year: '2022' }),
  },
]