import { MenuProps } from 'antd'

export const YEARS = ['2022', '2023', '2024', '2020 - Present']

export const YEARS_DATA: MenuProps['items'] = [
  {
    label: '2022',
    key: '2022',
    icon: null,
  },
  {
    label: '2023',
    key: '2023',
    icon: null,
  },
  {
    label: '2024',
    key: '2024',
    icon: null,
  },
]

export const ALL_YEARS = [
  { year: '2022', parent: '2022' },
  { year: '2023', parent: '2023' },
  { year: '2024', parent: '2024' },
]
