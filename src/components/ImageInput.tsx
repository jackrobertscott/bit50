import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type ImageInputProps = {
  // props
}

export const ImageInput: FC<ImageInputProps> = ({}) => {
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
