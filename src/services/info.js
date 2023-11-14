export const generateProductErrorInfo = (product) => {
    return `One or more properties are not valid.
    List of required properties:
    * title - must be a string with at least 3 characters, received ${product.title}
    * price - must be a number, received ${product.price}
    * id - must be a number, received ${product.id}
    * stock - must be a number, received ${product.stock}
    `
}