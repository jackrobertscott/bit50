import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type SliderProps = {
  // props
}

export const Slider: FC<SliderProps> = ({}) => {
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
