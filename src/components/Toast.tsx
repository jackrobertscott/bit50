import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type ToastProps = {
  // props
}

export const Toast: FC<ToastProps> = ({}) => {
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
