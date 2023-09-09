import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type SubmitProps = {
  // props
}

export const Submit: FC<SubmitProps> = ({}) => {
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