import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type CenterProps = {
  // props
}

export const Center: FC<CenterProps> = ({}) => {
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
