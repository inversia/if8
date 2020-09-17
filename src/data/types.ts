export const jewelleryTypes = {
    rings: 'кольца',
    bracelets: 'браслеты',
    earrings: 'серьги',
    neck: 'цепочки и подвески',
    brooches: 'броши',
} as const

export const interiorTypes = {
    vases: 'вазы',
    tables:'столы',
    chairs:'стулья',
    statuettes: 'статуэтки',
} as const

export const productTypes = {
    jewellery: jewelleryTypes,
    interior: interiorTypes
}

export const jewelleryMaterials = {
    gold: 'золото',
    silver: 'серебро',
    platinum: 'платина'
} as const

export const interiorMaterials = {
    wood: 'дерево',
    metal:'металл',
    ceramic:'керамика',
    glass:'стекло',
    steel:'сталь',
} as const

export const materials = {
    jewellery: jewelleryMaterials,
    interior: interiorMaterials
}

export type JewelleryType = keyof typeof jewelleryTypes
export type InteriorType  = keyof typeof interiorTypes
export type ProductType = JewelleryType | InteriorType

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
