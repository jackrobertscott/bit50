import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type RadioSelectProps = {
  // props
}

export const RadioSelect: FC<RadioSelectProps> = ({}) => {
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
