import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

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
