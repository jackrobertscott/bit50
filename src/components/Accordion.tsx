import { FC } from 'react'
import { $ } from '../createElement'
import { useTheme } from '../useTheme'

export type AccordionProps = {
  // props
}

export const Accordion: FC<AccordionProps> = ({}) => {
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
