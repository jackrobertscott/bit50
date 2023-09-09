import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type DrawerProps = {
  // props
}

export const Drawer: FC<DrawerProps> = ({}) => {
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
