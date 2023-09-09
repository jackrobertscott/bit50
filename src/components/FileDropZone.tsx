import { FC } from 'react'
import { createElement as $ } from '../createElement'
import { useTheme } from '../useTheme'

export type FileDropZoneProps = {
  // props
}

export const FileDropZone: FC<FileDropZoneProps> = ({}) => {
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
