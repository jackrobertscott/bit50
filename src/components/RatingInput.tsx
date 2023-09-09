import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type RatingInputProps = {
  // props
}

export const RatingInput: FC<RatingInputProps> = ({}) => {
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
