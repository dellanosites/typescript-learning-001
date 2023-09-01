// Type

type Order = {
    productId: string
    price: number
}

type User = {
    firstName: string
    age: number
    email: string
    password?: string // ? - Opcional
    orders: Order[]
    register?(): string
}

const user: User = {
    firstName: 'Jane',
    age: 38,
    email: 'bladellano@gmail.com',
    orders: [{ productId: 'abc', price: 100 }],
    register() { return 'Lorem ipsum is simply' } 
}

const printLog = (message: string) => { } // ? - Serve para dizer que o arg. pode ser undefined, mesmo sendo tipada como string.

printLog(user.password!) // ! - Byepassed ("Pode passar sim, tenho certeza!")

// Unions
type Author = {
    books: string[]
}

const agathaChristie: Author & User = {
    age: 35,
    books: ['Fred Leblon'],
    email: 'leblon@gmail.com',
    firstName: 'Fabio',
    orders: [{ productId: 'abc', price: 100 }, { productId: 'xyz', price: 500 }],
}

const georgeOrwell: Author & User = {
    age: 35,
    books: ['Fred Leblon'],
    email: 'fabio.leblon@gmail.com',
    firstName: 'Fabio',
    orders: [],
}

const williamShakespeare: Author & User = {
    age: 35,
    books: ['The Catcher in the Rye', 'To Kill a Mockingbird', '1984'],
    email: 'leblon@gmail.com',
    firstName: 'Fabio',
    orders: [{ productId: 'abc', price: 100 }, { productId: 'xyz', price: 500 }],
}

// Interface
interface UserInterface {
    readonly firstName: string
    email: string,
    login?():string
}

const emailUser: UserInterface = {
    email: 'contato@fenac.com.br',
    firstName: 'Servockiv',
    login(){ return 'Logged!' }
}

//! emailUser.firstName = 'nomeAlterado' //! N pode alterar, pois somente eh leitura.

interface AuthorInterface {
    books: string[]
}

const janeAusten: UserInterface & AuthorInterface = {
    email: 'contato@saraiva.com.br',
    books: ['The Catcher in the Rye', 'To Kill a Mockingbird', '1984'],
    firstName: 'Sergov Bethik'
}

// Type assinalada.
type Grade = number | string
const grade: Grade = 1