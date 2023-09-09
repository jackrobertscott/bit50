import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type AudioProps = {
  // props
}

export const Audio: FC<AudioProps> = ({}) => {
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
