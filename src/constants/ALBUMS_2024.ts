import { albumCover, fileNames } from '../helpers/fileNaming'

export const ALBUMS_2024 = [
  {
    id: 'tours-france',
    name: 'Tours - France',
    cover: albumCover('2024', 'tours-france', 14),
    images: fileNames({ album: 'tours-france', n: 37, type: 'jpg', year: '2024' }),
  },
  {
    id: 'villandry-france',
    name: 'Château de Villandry',
    cover: albumCover('2024', 'villandry-france', 27),
    images: fileNames({ album: 'villandry-france', n: 32, type: 'jpg', year: '2024' }),
  },
  {
    id: 'usse-france',
    name: 'Château Royal d\'Ussé',
    cover: albumCover('2024', 'usse-france', 50),
    images: fileNames({ album: 'usse-france', n: 50, type: 'jpg', year: '2024' }),
  },
  {
    id: 'saumur-france',
    name: 'Château de Saumur',
    cover: albumCover('2024', 'saumur-france', 1),
    images: fileNames({ album: 'saumur-france', n: 25, type: 'jpg', year: '2024' }),
  },
  {
    id: 'breze-france',
    name: 'Château de Brézé',
    cover: albumCover('2024', 'breze-france', 13),
    images: fileNames({ album: 'breze-france', n: 14, type: 'jpg', year: '2024' }),
  },
  {
    id: 'amboise-france',
    name: 'Château Royal d\'Amboise',
    cover: albumCover('2024', 'amboise-france', 9),
    images: fileNames({ album: 'amboise-france', n: 36, type: 'jpg', year: '2024' }),
  },
  {
    id: 'chenonceau-france',
    name: 'Château de Chenonceau',
    cover: albumCover('2024', 'chenonceau-france', 55),
    images: fileNames({ album: 'chenonceau-france', n: 71, type: 'jpg', year: '2024' }),
  },
  {
    id: 'cheverny-france',
    name: 'Château de Cheverny',
    cover: albumCover('2024', 'cheverny-france', 21),
    images: fileNames({ album: 'cheverny-france', n: 67, type: 'jpg', year: '2024' }),
  },
  {
    id: 'chambord-france',
    name: 'Château de Chambord',
    cover: albumCover('2024', 'chambord-france', 7),
    images: fileNames({ album: 'chambord-france', n: 54, type: 'jpg', year: '2024' }),
  },
  {
    id: 'croatia',
    name: 'Croatia',
    cover: albumCover('2024', 'croatia', 53),
    images: fileNames({ album: 'croatia', n: 99, type: 'jpg', year: '2024' }),
  },
  {
    id: 'bath-2024',
    name: 'Bath-2024',
    cover: albumCover('2024', 'bath-2024', 86),
    images: fileNames({ album: 'bath-2024', n: 95, type: 'jpg', year: '2024' }),
  },
]