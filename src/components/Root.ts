import { injectGlobal } from '@emotion/css'
import { FC, ReactElement, useEffect } from 'react'
import { createElement as $ } from '../createElement'
import { useTheme } from '../useTheme'

export type RootProps = {
  children: ReactElement | ReactElement[]
}

export const Root: FC<RootProps> = ({ children }) => {
  const theme = useTheme()
  useEffect(() => {
    injectGlobal({
      body: {
        margin: 0,
      },
    })
  }, [])
  return $('div', {
    css: {
      width: '100vw',
      height: '100vh',
      overflow: 'auto',
      backgroundColor: theme.root.bgColor.toString(),
    },
    children,
  })
}
