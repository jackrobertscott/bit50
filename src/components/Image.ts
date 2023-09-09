import { CSSInterpolation } from '@emotion/css'
import { FC } from 'react'
import { createElement as $ } from '../createElement'
import { useTheme } from '../useTheme'

export type ImageProps = {
  source: string
  label?: string
  css?: CSSInterpolation
}

export const Image: FC<ImageProps> = ({ source, label, css, ...rest }) => {
  const theme = useTheme()
  return $('img', {
    ...rest,
    src: source,
    alt: label,
    css: [
      {
        height: 'auto',
        maxWidth: '100%',
        borderRadius: theme.image.radius,
      },
      css,
    ],
  })
}
