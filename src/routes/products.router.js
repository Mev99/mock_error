import CustomError from "../services/customError.js";
import EErrors from "../services/enums.js";
import { generateProductErrorInfo } from "../services/info.js";
import { generateProduct } from "../utils.js";

import { Router } from "express";
const router = Router()


const product = []
for (let i = 0; i < 100; i++) {
    product.push(generateProduct())
}

router.get('/products', (req, res) => {
    res.send({ payload: product })
})

router.post('/', (req, res) => {
    const { title, price, id, stock } = req.body

    if (typeof price !== 'number' || typeof title !== 'string' || typeof id !== 'number' || typeof stock !== 'number') {
        CustomError.createError({
            name: 'Product creation error',
            cause: generateProductErrorInfo({ title, price, id, stock }),
            message: 'Error trying to create user',
            code: EErrors.INVALID_TYPE_ERROR
        })
    }

    product.push({ title, price, id, stock })
    res.status(200).send({ stutus: 'product added', payload: products })
})


export default router