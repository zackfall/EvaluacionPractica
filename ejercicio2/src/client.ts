import { Observer } from './types'

/* eslint-disable @typescript-eslint/space-before-function-paren */
export class Client implements Observer {
  private readonly name: string

  constructor(name: string) {
    this.name = name
  }

  public update(price: number): void {
    console.log(`[${this.name}] The price has been decreased to ${price}`)
  }
}
