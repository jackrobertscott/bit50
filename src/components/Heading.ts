import { CSSInterpolation } from '@emotion/css'
import { FC, ReactNode } from 'react'
import { createElement as $ } from '../utils/createElement'
import { useTheme } from '../utils/useTheme'

export type HeadingProps = {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  children: ReactNode
  css?: CSSInterpolation
}

export const Heading: FC<HeadingProps> = ({ level = 1, children, css }) => {
  const theme = useTheme()
  return $(`h${level}` as const, {
    children,
    css: [
      {
        margin: '0',
        padding: '0',
        fontFamily: theme.heading.family,
        color: theme.heading.color.toString(),
      },
      css,
    ],
  })
}
