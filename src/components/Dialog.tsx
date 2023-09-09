import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type DialogProps = {
  // props
}

export const Dialog: FC<DialogProps> = ({}) => {
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
