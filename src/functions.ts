interface MathFunc {
    (x: number, y: number): number
}

const sum: MathFunc = (x: number, y: number): number => {
    return x + y;
}

const sub: MathFunc = (a: number, b: number) => {
    return a - b
}

const value = sum(1, 2)

const log = (message: string): void => {
    console.log(message)
}

