import { CSSBorder } from './CSSBorder'
import { HSLAColor } from './HSLAColor'
import { fib } from './fib'

export function useTheme() {
  return {
    root: {
      bgColor: new HSLAColor(0, 0, 15),
    },
    page: {
      maxWidth: fib(16),
      border: new CSSBorder(1, 'solid', new HSLAColor(0, 0, 0)),
    },
  }
}
