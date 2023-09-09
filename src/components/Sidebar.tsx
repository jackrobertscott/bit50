import { FC } from 'react'
import { createElement as $ } from '../createElement'
import { useTheme } from '../useTheme'

export type SidebarProps = {
  // props
}

export const Sidebar: FC<SidebarProps> = ({}) => {
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
