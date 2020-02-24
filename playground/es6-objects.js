const name = 'Andrew'
const userAge = 27

const user = {
    name,
    userAge,
    location: 'Chicago'
}

console.log(user)

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined
}

const {label: productLabel, stock, rating = 5} = product

const transaction = (type, { label, price, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)

