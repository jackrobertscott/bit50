import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type GridProps = {
  // props
}

export const Grid: FC<GridProps> = ({}) => {
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
