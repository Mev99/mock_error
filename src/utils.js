import { faker } from '@faker-js/faker'

export const generateProduct = () => {
  return {
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    id: faker.number.int({ min: 0, max: 100 }),
    stock: faker.number.int({ min: 0, max: 100 })
  }
}