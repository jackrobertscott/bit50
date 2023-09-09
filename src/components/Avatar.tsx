import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type AvatarProps = {
  // props
}

export const Avatar: FC<AvatarProps> = ({}) => {
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
