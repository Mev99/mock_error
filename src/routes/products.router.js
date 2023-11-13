import { Router } from "express";
const router = Router()
import { generateProduct } from "../utils.js";
import { faker } from "@faker-js/faker";

const product = []
    for (let i = 0; i < 100; i++) {
        product.push(generateProduct())
    }

router.get('/products', (req, res) => {
    res.send({ payload: product })
})

export default router