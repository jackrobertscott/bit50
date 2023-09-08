import { CSSInterpolation, css } from '@emotion/css'
import React, {
  ComponentClass,
  FC,
  HTMLProps,
  ReactElement,
  ReactNode,
  SVGProps,
} from 'react'

type ElementProps<T> = T extends keyof HTMLElementTagNameMap
  ? HTMLProps<HTMLElementTagNameMap[T]>
  : T extends keyof SVGElementTagNameMap
  ? SVGProps<SVGElementTagNameMap[T]>
  : T extends FC<infer P>
  ? P
  : T extends ComponentClass<infer P>
  ? P
  : {}

type CssProps<T> = T & { css?: CSSInterpolation }

export function createElement<
  T extends string | FC<any> | ComponentClass<any, any>
>(
  type: T,
  props?: CssProps<ElementProps<T>> | null,
  ...children: ReactNode[]
): ReactElement<ElementProps<T>> {
  if (props?.css) {
    const className = [css(props.css), props.className]
      .filter(Boolean)
      .join(' ')
    props = { ...props, className }
  }
  children = [
    ...(Array.isArray(props?.children) ? props!.children : [props?.children]),
    ...children,
  ]
  return React.createElement(type, props, ...children)
}
