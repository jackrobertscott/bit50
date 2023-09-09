import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type FieldProps = {
  // props
}

export const Field: FC<FieldProps> = ({}) => {
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
