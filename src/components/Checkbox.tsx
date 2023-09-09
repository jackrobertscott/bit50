import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type CheckboxProps = {
  // props
}

export const Checkbox: FC<CheckboxProps> = ({}) => {
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
