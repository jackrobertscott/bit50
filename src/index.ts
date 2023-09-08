import { FC, createElement } from 'react'

export const StringInput: FC<{
  value?: string | null
  onChange?: (value?: string) => void
}> = () => {
  return createElement('div', {}, 'String Input')
}
