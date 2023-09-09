import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type PopOverProps = {
  // props
}

export const PopOver: FC<PopOverProps> = ({}) => {
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
