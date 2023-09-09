import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type SpinnerProps = {
  // props
}

export const Spinner: FC<SpinnerProps> = ({}) => {
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
