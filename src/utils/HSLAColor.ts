export class HSLAColor {
  private _h: number
  private _s: number
  private _l: number
  private _a: number

  constructor(h: number, s: number, l: number, a: number = 1) {
    this._h = h % 360
    this._s = Math.min(100, Math.max(0, s))
    this._l = Math.min(100, Math.max(0, l))
    this._a = Math.min(1, Math.max(0, a))
  }

  get hue(): number {
    return this._h
  }

  get saturation(): number {
    return this._s
  }

  get lightness(): number {
    return this._l
  }

  get alpha(): number {
    return this._a
  }

  get value(): { h: number; s: number; l: number; a: number } {
    return { h: this._h, s: this._s, l: this._l, a: this._a }
  }

  static fromString(hslaString: string): HSLAColor | null {
    const regex = /hsla\((\d+),\s*(\d+)%,\s*(\d+)%,\s*(\d*(?:\.\d+)?)\)/
    const match = hslaString.match(regex)
    if (!match) return null

    return new HSLAColor(
      parseInt(match[1]),
      parseInt(match[2]),
      parseInt(match[3]),
      parseFloat(match[4])
    )
  }

  toString(): string {
    return `hsla(${this._h}, ${this._s}%, ${this._l}%, ${this._a})`
  }

  adjust(
    adjustments: Partial<{ h: number; s: number; l: number; a: number }>
  ): this {
    const { h = 0, s = 0, l = 0, a = 0 } = adjustments
    this._h = (this._h + h) % 360
    this._s = Math.min(100, Math.max(0, this._s + s))
    this._l = Math.min(100, Math.max(0, this._l + l))
    this._a = Math.min(1, Math.max(0, this._a + a))
    return this
  }

  set(values: Partial<{ h: number; s: number; l: number; a: number }>): this {
    if (values.h !== undefined) this._h = values.h % 360
    if (values.s !== undefined) this._s = Math.min(100, Math.max(0, values.s))
    if (values.l !== undefined) this._l = Math.min(100, Math.max(0, values.l))
    if (values.a !== undefined) this._a = Math.min(1, Math.max(0, values.a))
    return this
  }
}
