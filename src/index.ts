import { FC } from 'react'
import { createElement } from './createElement'

export const StringInput: FC<{
  value?: string | null
  onChange?: (value?: string) => void
}> = () => {
  return createElement(
    'div',
    {
      css: {
        color: 'green',
      },
      children: createElement(
        'div',
        {
          css: {
            background: 'blue',
          },
          children: ['asdf'],
        },
        'Hello'
      ),
    },
    'String Input'
  )
}
