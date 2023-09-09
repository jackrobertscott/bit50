import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type CellProps = {
  // props
}

export const Cell: FC<CellProps> = ({}) => {
  const theme = useTheme()
  return $('div', {
    css: {
      // css
    },
    children: [
      // children
    ],
  })
}