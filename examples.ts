// # Difference between JavaScript and Typescript

// ## Primitive or Basic Types

// ### Boolean
let isValid: boolean;

isValid = true;

console.log(isValid);

// ### Number
let myNumber:number;

myNumber = 2;

// ### String
let myString:string;

myString = 'hello';

// ### Object
let myObject:object;

myObject = {}

// ### Array
let myArray:Array<string> | string[]
myArray = ['one', 'two']

let myObjectArray:object[]
myObjectArray = [{hello: 'world'}]

// ### Any
let anyType:any;
anyType = 'hello';
anyType = []
anyType = {}

// ## Types and Intefaces
let cart: CartItem[] = [];

// Use types if you need to use a union
type CartItem = {
    sku: string;
    name: string;
    quantity: number;
}

// use interfaces if you need to extend
interface Cart {
    info: object[],
    type: string,
    id: string,
    buckets: object[]
}

function addCartItem(item: CartItem): CartItem[] {
    cart.push(item);
    return cart;
}

const results = addCartItem({
    name: 'Pants',
    quantity: 1,
    sku: 'SKU1'
});

console.log(results)

// # Typescript Features

// ## Type inference
// https://www.typescriptlang.org/docs/handbook/type-inference.html#contextual-typing
let x = 3;

// x = '2'

// ## Contextual Typing
// https://www.typescriptlang.org/docs/handbook/type-inference.html#contextual-typing

// ## Extend Interface
interface Item {
    sku?: string;
    name?: string;
    quantity?: number;
    getName(s: string): string;
}
interface BopisItem extends Item {
    stsStock?: number;
    storeStock?: number;
}

const ispuItem: BopisItem = {
    getName() {
        return 'hello';
    }
}

// ## Type Aliases
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-aliases

type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === "string") {
        return n;
    }
    else {
        return n();
    }
}

console.log(getName(() => {
    return 'Dan';
}))

// ## Generics
function identity<T>(arg: T) {
    return arg;
}

let output = identity<string>("myString");  // type of output will be 'string'

// with type inference
let output2 = identity("myString");  // type of output will be 'string'