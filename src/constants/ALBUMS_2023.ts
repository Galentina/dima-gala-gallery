import { albumCover, fileNames } from '../helpers/fileNaming'

export const ALBUMS_2023 = [
  {
    id: 'bath',
    name: 'Bath',
    cover: albumCover('2023', 'bath', 16),
    images: fileNames({ album: 'bath', n: 143, type: 'jpg', year: '2023' }),
  },
  {
    id: 'keukenhof2023',
    name: 'Keukenhoff - 2023',
    cover: albumCover('2023', 'keukenhof2023', 1),
    images: fileNames({ album: 'keukenhof2023', n: 20, type: 'jpg', year: '2023' }),
  },
  {
    id: 'brugge-amsterdam',
    name: 'Brugge - Amsterdam',
    cover: 'https://www.malareva.com/picasa/albums/2023/brugge-amsterdam/images/brugge-amsterdam-1.jpg',
    images: fileNames({ album: 'brugge-amsterdam', n: 43, type: 'jpg', year: '2023' }),
  },
  {
    id: 'brussels2023',
    name: 'Brussels',
    cover: 'https://www.malareva.com/picasa/albums/2023/brussels2023/images/brussels2023-5.jpg',
    images: fileNames({ album: 'brussels2023', n: 30, type: 'jpg', year: '2023' }),
  },
  {
    id: 'garden2023',
    name: 'Garden 2023',
    cover: 'https://www.malareva.com/picasa/albums/2023/garden2023/images/garden2023-1.jpg',
    images: fileNames({ album: 'garden2023', n: 13, type: 'jpg', year: '2023' }),
    video: fileNames({ album: 'garden2023-v', n: 2, type: 'mp4', year: '2023' }),
  },
  {
    id: 'madeira2023',
    name: 'Madeira',
    cover: 'https://www.malareva.com/picasa/albums/2023/madeira2023/images/madeira2023-55.jpg',
    images: fileNames({ album: 'madeira2023', n: 484, type: 'jpg', year: '2023' }),
  },
  {
    id: 'majorca2023',
    name: 'Majorca',
    cover: 'https://www.malareva.com/picasa/albums/2023/majorca2023/images/majorca2023-13.jpg',
    images: fileNames({ album: 'majorca2023', n: 182, type: 'jpg', year: '2023' }),
  },
  {
    id: 'us2023',
    name: 'New York - New Haven',
    cover: 'https://www.malareva.com/picasa/albums/2023/us2023/images/us2023-170.jpg',
    images: fileNames({ album: 'us2023', n: 264, type: 'jpg', year: '2023' }),
  },
]