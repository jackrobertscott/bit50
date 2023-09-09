import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type TagProps = {
  // props
}

export const Tag: FC<TagProps> = ({}) => {
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
