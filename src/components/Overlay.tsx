import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type OverlayProps = {
  // props
}

export const Overlay: FC<OverlayProps> = ({}) => {
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
