import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type PageProps = {
  // props
}

export const Page: FC<PageProps> = ({}) => {
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
