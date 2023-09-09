import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type TreeProps = {
  // props
}

export const Tree: FC<TreeProps> = ({}) => {
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
