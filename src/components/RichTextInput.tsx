import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type RichTextInputProps = {
  // props
}

export const RichTextInput: FC<RichTextInputProps> = ({}) => {
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
