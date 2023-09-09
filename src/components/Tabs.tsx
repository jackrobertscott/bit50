import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type TabsProps = {
  // props
}

export const Tabs: FC<TabsProps> = ({}) => {
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