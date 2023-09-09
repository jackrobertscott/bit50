import { FC } from 'react'
import { Page } from '../src/components/Page'
import { createElement as $ } from '../src/createElement'

export const App: FC<{}> = () => $(Page, {})
