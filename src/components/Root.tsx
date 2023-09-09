import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type RootProps = {
  // props
}

export const Root: FC<RootProps> = ({}) => {
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
