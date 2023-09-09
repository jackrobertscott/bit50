import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type ExpanderProps = {
  // props
}

export const Expander: FC<ExpanderProps> = ({}) => {
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
