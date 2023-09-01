//Tipos basicos

let age: number = 5;
const firstName: string = 'Felipe'
const isValid: boolean = true
const idk: any = 5

const ids: number[] = [1,2,3,4,5]
const booleans: boolean[] = [true, false, false, true]
const names: string[] = ['Felipe', 'Jane']

//Tupla
const person: [number, string] = [1,'Felipe']

//Lista de Tuplas
const people: [number, string][] = [
    [1,'Jane'],
    [1,'Caio'],
    [1,'Manu'],
]

//Intersections
const productId: number | string = '1'
const productSlug: number | string | boolean = 10

//Enum
enum Direction {
    Up = 1,
    Down = 2,
    Left = 'Esquerda'
}

const direction = Direction.Left

// Type Assertions 
const productName: any = 'Boneh'
// let itemId = productName as string; // Opcao 1
let itemId = <string>productName; //  Opcao 2


console.log(direction)