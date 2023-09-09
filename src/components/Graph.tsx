import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type GraphProps = {
  // props
}

export const Graph: FC<GraphProps> = ({}) => {
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
