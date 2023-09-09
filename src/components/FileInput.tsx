import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type FileInputProps = {
  // props
}

export const FileInput: FC<FileInputProps> = ({}) => {
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
