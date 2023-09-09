import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type TextProps = {
  // props
}

export const Text: FC<TextProps> = ({}) => {
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
