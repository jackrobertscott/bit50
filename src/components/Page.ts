import { FC, ReactElement } from 'react'
import { createElement as $ } from '../utils/createElement'
import { useTheme } from '../utils/useTheme'

export type PageProps = {
  children: ReactElement | ReactElement[]
}

export const Page: FC<PageProps> = ({ children }) => {
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
    children,
  })
}
