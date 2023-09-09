import { FC } from 'react'
import { Page } from '../src/components/Page'
import { Root } from '../src/components/Root'
import { createElement as $ } from '../src/createElement'

export const App: FC<{}> = () =>
  $(Root, {
    children: [$(Page)],
  })
