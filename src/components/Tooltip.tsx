import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type TooltipProps = {
  // props
}

export const Tooltip: FC<TooltipProps> = ({}) => {
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