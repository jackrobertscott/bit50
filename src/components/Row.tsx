import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type RowProps = {
  // props
}

export const Row: FC<RowProps> = ({}) => {
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
