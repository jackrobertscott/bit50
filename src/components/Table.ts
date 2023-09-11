import { FC } from 'react'
import { createElement as $ } from '../utils/createElement'
import { useTheme } from '../utils/useTheme'

export type TableProps = {
  // props
}

export const Table: FC<TableProps> = ({}) => {
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
