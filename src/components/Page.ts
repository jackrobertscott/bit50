import { FC } from 'react'
import { createElement as $ } from '../createElement'
import { useTheme } from '../useTheme'

export type PageProps = {
  // props
}

export const Page: FC<PageProps> = ({}) => {
  const theme = useTheme()
  return $('div', {
    css: {
      width: '100%',
      height: '100%',
      margin: '0 auto',
      maxWidth: theme.page.maxWidth,
      borderLeft: theme.page.border.toString(),
      borderRight: theme.page.border.toString(),
    },
    children: ['Hello world'],
  })
}
