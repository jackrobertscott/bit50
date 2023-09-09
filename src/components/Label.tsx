import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type LabelProps = {
  // props
}

export const Label: FC<LabelProps> = ({}) => {
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
