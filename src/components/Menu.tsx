import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type MenuProps = {
  // props
}

export const Menu: FC<MenuProps> = ({}) => {
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