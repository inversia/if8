export const productTypes = {
    rings: 'кольца',
    bracelets: 'браслеты',
    earrings: 'серьги',
    neck: 'цепочки и подвески',
    brooches: 'броши',
    vases: 'вазы',
    tables:'столы',
    chairs:'стулья',
    statuettes: 'статуэтки',
    gold: 'золото',
    silver: 'серебро',
    wood: 'дерево',
    metal:'металл',
    ceramic:'керамика',
    glass:'стекло',
    steel:'сталь',
} as const

export type ProductType = keyof typeof productTypes

export type Product = {
    type: ProductType,
    matherial: string,
    description: string,
    probe: number,
    partNumber: number,
    price:number,
    availability: number,
    colors:[string, string][],
    img:string,
    id:number
}
