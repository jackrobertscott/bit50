import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type ImageProps = {
  // props
}

export const Image: FC<ImageProps> = ({}) => {
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
