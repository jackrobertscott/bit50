import { CSSInterpolation } from '@emotion/css'
import { FC } from 'react'
import { createElement as $ } from '../createElement'
import { useTheme } from '../useTheme'

export type IconProps = {
  path: string // SVG path string
  size?: number | string
  css?: CSSInterpolation
}

export const Icon: FC<IconProps> = ({ path, size, css }) => {
  const theme = useTheme()
  return $('div', {
    css: [
      {
        alignItems: 'center',
        justifyContent: 'center',
        display: 'inline-flex',
      },
      css,
    ],
    children: $('svg', {
      viewBox: '0 0 24 24',
      width: size ?? theme.icon.size,
      height: size ?? theme.icon.size,
      css: { fill: theme.icon.color.toString() },
      children: [$('path', { d: path })],
    }),
  })
}
