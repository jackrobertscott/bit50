import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type ListProps = {
  // props
}

export const List: FC<ListProps> = ({}) => {
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
