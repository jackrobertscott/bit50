import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type MatrixProps = {
  // props
}

export const Matrix: FC<MatrixProps> = ({}) => {
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