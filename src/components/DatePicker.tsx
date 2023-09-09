import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type DatePickerProps = {
  // props
}

export const DatePicker: FC<DatePickerProps> = ({}) => {
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
