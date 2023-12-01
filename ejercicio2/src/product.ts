/* eslint-disable @typescript-eslint/space-before-function-paren */
import { Observer } from './types'

export class Product {
  private readonly observers: Observer[] = []
  private price: number

  constructor(initialPrice: number) {
    this.price = initialPrice
  }

  public addObserver(observer: Observer): void {
    this.observers.push(observer)
  }

  public deleteObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer)
    if (index !== -1) {
      this.observers.splice(index, 1)
    }
  }

  public changePrice(newPrice: number): void {
    if (newPrice < this.price) {
      this.price = newPrice
      this.notifyObservers()
    }
  }

  private notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.price)
    }
  }
}
