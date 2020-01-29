// Write a TypeScript application that accomplishes the following:
// - Write an interface for the products collection called Products.
// - Write an interface that extends the product interface and adds the property
//   `fullyReserved` as a boolean. Call this interface ReservedProducts.
// - Caclulate if the item is fullyReserved by checking if the reserved is less than
//   the directStock.
// - If the reserved is greater than the directStock set fullyReserved to `false`.
// - Return an new collection of type ReservedProducts
// - Invoke your function and output the results via console.log

const products = [{
    color: 'red',
    reserved: 10,
    directStock: 20,
},
{
    color: 'blue',
    reserved: 12,
    directStock: 10,
},{
    color: 'green',
    reserved: 7,
    directStock: 30,
},{
    color: 'orange',
    reserved: 45,
    directStock: 10,
},{
    color: 'blue',
    reserved: 1,
    directStock: 13,
},{
    color: 'blue',
    reserved: 12,
    directStock: 5,
},{
    color: 'yellow',
    reserved: 10,
    directStock: 99,
}]
