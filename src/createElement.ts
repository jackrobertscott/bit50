import { CSSInterpolation, css } from '@emotion/css'
import React, {
  Children,
  ComponentClass,
  FC,
  HTMLProps,
  ReactElement,
  ReactNode,
  SVGProps,
  cloneElement,
  isValidElement,
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

const ensureArrayElementsHaveKey = (childrenArray: ReactNode[]): ReactNode[] =>
  Children.map(childrenArray, (child, index) =>
    isValidElement(child)
      ? cloneElement(child, { key: child.key || index })
      : child
  )!

export function createElement<
  T extends string | FC<any> | ComponentClass<any, any>
>(
  type: T,
  props?: CssProps<ElementProps<T>> | null,
  ...children: ReactNode[]
): ReactElement<ElementProps<T>> {
  let finalChildren = children
  if (props?.children) {
    finalChildren = Array.isArray(props.children)
      ? ensureArrayElementsHaveKey(props.children)
      : [props.children, ...children]
  }
  if (props?.css) {
    const emotionClass = css(props.css)
    const className = [emotionClass, props.className].filter(Boolean).join(' ')
    props = { ...props, className }
  }
  return React.createElement(type, props, ...finalChildren)
}
