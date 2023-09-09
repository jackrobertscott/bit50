import { HSLAColor } from './HSLAColor'

export class CSSShadow {
  private _x: number
  private _y: number
  private _blur: number
  private _spread: number
  private _color: HSLAColor
  private _inset: boolean

  constructor(
    x: number = 0,
    y: number = 0,
    blur: number = 0,
    spread: number = 0,
    color: HSLAColor = new HSLAColor(0, 0, 0, 1),
    inset: boolean = false
  ) {
    this._x = x
    this._y = y
    this._blur = blur
    this._spread = spread
    this._color = color
    this._inset = inset
  }

  get x(): number {
    return this._x
  }

  get y(): number {
    return this._y
  }

  get blur(): number {
    return this._blur
  }

  get spread(): number {
    return this._spread
  }

  get color(): HSLAColor {
    return this._color
  }

  get inset(): boolean {
    return this._inset
  }

  set(
    values: Partial<{
      x: number
      y: number
      blur: number
      spread: number
      color: HSLAColor
      inset: boolean
    }>
  ): this {
    if (values.x !== undefined) this._x = values.x
    if (values.y !== undefined) this._y = values.y
    if (values.blur !== undefined) this._blur = values.blur
    if (values.spread !== undefined) this._spread = values.spread
    if (values.color !== undefined) this._color = values.color
    if (values.inset !== undefined) this._inset = values.inset
    return this
  }

  adjust(
    adjustments: Partial<{
      x: number
      y: number
      blur: number
      spread: number
      color: HSLAColor
      inset: boolean
    }>
  ): this {
    if (adjustments.x !== undefined) this._x += adjustments.x
    if (adjustments.y !== undefined) this._y += adjustments.y
    if (adjustments.blur !== undefined) this._blur += adjustments.blur
    if (adjustments.spread !== undefined) this._spread += adjustments.spread
    if (adjustments.color !== undefined)
      this._color.adjust(adjustments.color.value)
    if (adjustments.inset !== undefined) this._inset = adjustments.inset
    return this
  }

  toString(): string {
    const insetString = this._inset ? 'inset ' : ''
    return `${insetString}${this._x}px ${this._y}px ${this._blur}px ${
      this._spread
    }px ${this._color.toString()}`
  }
}
