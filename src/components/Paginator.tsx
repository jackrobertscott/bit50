import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type PaginatorProps = {
  // props
}

export const Paginator: FC<PaginatorProps> = ({}) => {
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
