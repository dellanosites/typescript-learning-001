const returnValue = <T>(value: T): T => value

const message = returnValue<string>('Qualquer coisa...')

const count = returnValue<number>(5)

// Generics in functions
function getFirstValueFromArray<T>(array: T[]): T {
    return array[0]
}

const firsValueFromStringArray = getFirstValueFromArray<string>(["1", "2"])
const firsValueFromNumberArray = getFirstValueFromArray<number>([10, 20])

const returnPromise = async (): Promise<number> => {
    return 5
}

// Generics in Class
class GenericNumber<T>{
    zeroValue: T
    sum: (x: T, y: T) => T

    constructor(zeroValue: T, sum: (x: T, y: T) => T) {
        this.zeroValue = zeroValue
        this.sum = sum
    }
}

const myGenericNumber = new GenericNumber<number>(0, (x: number, y: number) => {
    return x + y
})