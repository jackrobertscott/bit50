import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type TextInputProps = {
  // props
}

export const TextInput: FC<TextInputProps> = ({}) => {
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
