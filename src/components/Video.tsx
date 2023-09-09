import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type VideoProps = {
  // props
}

export const Video: FC<VideoProps> = ({}) => {
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
