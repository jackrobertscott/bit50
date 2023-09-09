import { FC } from 'react'
import { $ } from './createElement'

export type ComponentProps = {
  // props
}

export const Component: FC<ComponentProps> = ({}) => {
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
