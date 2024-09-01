export const fileNames = ({ album, n, type, year }: { album: string, n: number, type: string, year: string }) => {
  const nameList = []
  for (let i = 1; i <= n; i++) {
    nameList.push({ original: `https://www.malareva.com/picasa/albums/${year}/${album}/images/${album}-${i}.${type}`,
      thumbnail: `https://www.malareva.com/picasa/albums/${year}/${album}/tmb/tmb-${album}-${i}.${type}` })
  }
  return nameList
}

export const albumCover = (year: string, name: string, num: number) =>
  `https://www.malareva.com/picasa/albums/${year}/${name}/images/${name}-${num}.jpg`