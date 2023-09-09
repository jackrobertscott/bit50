import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type MultiSelectProps = {
  // props
}

export const MultiSelect: FC<MultiSelectProps> = ({}) => {
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
