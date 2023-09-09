import { FC } from 'react'
import { createElement as $ } from '../createElement'
import { useTheme } from '../useTheme'

export type HeadingProps = {
  // props
}

export const Heading: FC<HeadingProps> = ({}) => {
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
