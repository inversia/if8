export const jewelleryTypes = {
    rings: 'кольца',
    bracelets: 'браслеты',
    earrings: 'серьги',
    neck: 'цепочки и подвески',
    // brooches: 'броши',
    corporate: 'корпоратив',
    exclusive: 'эксклюзив'
} as const

export const interiorTypes = {
    vases: 'вазы',
    tables:'столы',
    chairs:'стулья',
    statuettes: 'статуэтки',
    exclusive: 'эксклюзив'
} as const

export const subcategories = {
    jewellery: jewelleryTypes,
    interior: interiorTypes
}

export const jewelleryMaterials = {
    gold: 'золото',
    silver: 'серебро',
    // platinum: 'платина',
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

export type Category = keyof typeof subcategories
export type Subcategory = keyof typeof jewelleryTypes | keyof typeof interiorTypes
export type Material = keyof typeof jewelleryMaterials | keyof typeof interiorMaterials

export type ProductId = string;

export type Product = {
    category: Category
    subcategory: Subcategory
    material: Material
    title: string
    description?: string
    probe?: number[]
    partNumber: string
    weight?: number
    price:number
    availability?: number
    colors?:[string, string][]
    img:string
    id:ProductId
}

export type FilterProps = {
    category?: Category
    subcategory?: Subcategory
    material?: Material
    id?: string,
    priceValue?:number
}

export type FilterProp = keyof FilterProps