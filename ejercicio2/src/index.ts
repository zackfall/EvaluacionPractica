/* eslint-disable @typescript-eslint/space-before-function-paren */

import * as readline from 'readline'
import { Client } from './client'
import { Product } from './product'

const initialPrice = 100

const product = new Product(initialPrice)

const client1 = new Client('Pepe')
const client2 = new Client('Mario')

product.addObserver(client1)
product.addObserver(client2)

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Type the new product price:\n', (answer) => {
  if (answer !== '') {
    const nuevoPrecio = parseInt(answer)
    if (nuevoPrecio >= initialPrice) {
      console.error('The price has increased')
    }
    if (!isNaN(nuevoPrecio)) {
      product.changePrice(nuevoPrecio)
    } else {
      rl.close()
      throw new Error('Invalid price')
    }
  }
  rl.close()
})
