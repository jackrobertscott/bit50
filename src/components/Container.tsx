import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type ContainerProps = {
  // props
}

export const Container: FC<ContainerProps> = ({}) => {
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
