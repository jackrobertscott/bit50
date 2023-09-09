import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type TimePickerProps = {
  // props
}

export const TimePicker: FC<TimePickerProps> = ({}) => {
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
