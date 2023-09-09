import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type IconProps = {
  // props
}

export const Icon: FC<IconProps> = ({}) => {
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
