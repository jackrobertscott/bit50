import { FC } from 'react'
import { createElement as $ } from '../utils/createElement'
import { useTheme } from '../utils/useTheme'

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
