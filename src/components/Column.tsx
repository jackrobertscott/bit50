import { FC } from 'react'
import { createElement as $ } from '../createElement'
import { useTheme } from '../useTheme'

export type ColumnProps = {
  // props
}

export const Column: FC<ColumnProps> = ({}) => {
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
