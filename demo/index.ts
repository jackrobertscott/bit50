import { createElement } from 'react'
import { createRoot } from 'react-dom/client'

const root = createElement('div', { style: { color: 'green' } }, 'hello world')

createRoot(document.getElementById('root')!).render(root)
