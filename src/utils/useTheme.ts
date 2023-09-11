import { CSSBorder } from './CSSBorder'
import { HSLAColor } from './HSLAColor'
import { fib } from './fib'

export function useTheme() {
  return {
    root: {
      bgColor: new HSLAColor(0, 0, 15),
    },
    icon: {
      size: '0.9em',
      color: new HSLAColor(0, 0, 0),
    },
    page: {
      maxWidth: fib(16),
      border: new CSSBorder(0, 'solid', new HSLAColor(0, 0, 0)),
    },
    heading: {
      color: new HSLAColor(0, 0, 0),
      family: 'inherit',
    },
    image: {
      radius: fib(8),
    },
  }
}
