import { mdiLoading } from '@mdi/js'
import { FC } from 'react'
import { Icon } from '../src/components/Icon'
import { Page } from '../src/components/Page'
import { Root } from '../src/components/Root'
import { createElement as $ } from '../src/createElement'

export const App: FC<{}> = () =>
  $(Root, {
    children: [
      $(Page, {
        children: $(Icon, {
          path: mdiLoading,
        }),
      }),
    ],
  })
