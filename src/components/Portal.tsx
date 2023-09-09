import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type PortalProps = {
  // props
}

export const Portal: FC<PortalProps> = ({}) => {
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
