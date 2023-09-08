import { FC, createElement } from 'react'
import { StringInput } from '../src/index'

export const App: FC<{}> = () =>
  createElement('div', {}, 'hello world', createElement(StringInput, {}))
