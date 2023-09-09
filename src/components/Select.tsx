import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type SelectProps = {
  // props
}

export const Select: FC<SelectProps> = ({}) => {
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
