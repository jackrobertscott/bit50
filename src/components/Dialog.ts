import { FC } from 'react'
import { createElement as $ } from '../utils/createElement'
import { useTheme } from '../utils/useTheme'

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
