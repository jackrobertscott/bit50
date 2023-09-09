import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type PosterProps = {
  // props
}

export const Poster: FC<PosterProps> = ({}) => {
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
