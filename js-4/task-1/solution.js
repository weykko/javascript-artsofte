const A = {
    gamma: 9
}

const B = {
    lambda: 'lambda'
}

const C = {
    figma: 'site'
}

Object.setPrototypeOf(B, A);
Object.setPrototypeOf(C, B);
export const aggregate = Object.create(C);
