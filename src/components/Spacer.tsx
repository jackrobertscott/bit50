import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type SpacerProps = {
  // props
}

export const Spacer: FC<SpacerProps> = ({}) => {
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
