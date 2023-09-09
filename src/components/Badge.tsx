import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type BadgeProps = {
  // props
}

export const Badge: FC<BadgeProps> = ({}) => {
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
