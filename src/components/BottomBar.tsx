import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type BottomBarProps = {
  // props
}

export const BottomBar: FC<BottomBarProps> = ({}) => {
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
