import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type ProgressProps = {
  // props
}

export const Progress: FC<ProgressProps> = ({}) => {
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
