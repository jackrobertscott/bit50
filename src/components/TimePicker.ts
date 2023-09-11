import { FC } from 'react'
import { createElement as $ } from '../utils/createElement'
import { useTheme } from '../utils/useTheme'

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
