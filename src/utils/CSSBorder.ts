import { HSLAColor } from './HSLAColor'

type BorderStyle =
  | 'solid'
  | 'dotted'
  | 'dashed'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset'
  | 'none'
  | 'hidden'

export class CSSBorder {
  private _width: number
  private _style: BorderStyle
  private _color: HSLAColor

  constructor(
    width: number = 1,
    style: BorderStyle = 'solid',
    color: HSLAColor = new HSLAColor(0, 0, 0, 1)
  ) {
    this._width = width
    this._style = style
    this._color = color
  }

  get width(): number {
    return this._width
  }

  get style(): BorderStyle {
    return this._style
  }

  get color(): HSLAColor {
    return this._color
  }

  set(
    values: Partial<{ width: number; style: BorderStyle; color: HSLAColor }>
  ): this {
    if (values.width !== undefined) this._width = values.width
    if (values.style !== undefined) this._style = values.style
    if (values.color !== undefined) this._color = values.color
    return this
  }

  adjust(
    adjustments: Partial<{
      width: number
      style: BorderStyle
      color: HSLAColor
    }>
  ): this {
    if (adjustments.width !== undefined) this._width += adjustments.width
    if (adjustments.style !== undefined) this._style = adjustments.style
    if (adjustments.color !== undefined)
      this._color.adjust(adjustments.color.value)
    return this
  }

  toString(): string {
    return `${this._width}px ${this._style} ${this._color.toString()}`
  }
}
