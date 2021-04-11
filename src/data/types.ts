// export const jewelleryTypes = {
//     rings: 'кольца',
//     bracelets: 'браслеты',
//     earrings: 'серьги',
//     neck: 'цепочки и подвески',
//     // brooches: 'броши',
//     corporate: 'корпоратив',
//     exclusive: 'эксклюзив'
// } as const

export const jewelleryTypes = {
    rings: ['кольца', 'rings'],
    bracelets: ['браслеты', 'bracelets'],
    earrings: ['серьги','earrings'],
    neck: ['цепочки и подвески', 'chains & pendants'],
    // brooches: 'броши',
    corporate: ['корпоратив', 'corporate'],
    exclusive: ['эксклюзив', 'exclusive']
} as const

// export const interiorTypes = {
//     vases: 'вазы',
//     tables:'столы',
//     chairs:'стулья',
//     statuettes: 'статуэтки',
//     exclusive: 'эксклюзив'
// } as const

export const interiorTypes = {
    vases: ['вазы', 'vases'],
    tables:['столы', 'tables'],
    chairs:['стулья', 'chairs'],
    statuettes: ['статуэтки', 'statuettes'],
    exclusive: ['эксклюзив', 'exclusive']
} as const

export const subcategories = {
    jewellery: jewelleryTypes,
    interior: interiorTypes
}

export const jewelleryMaterials = {
    gold: ['золото', 'gold'],
    silver: ['серебро', 'silver'],
    // platinum: 'платина',
} as const

export const interiorMaterials = {
    wood: ['дерево', 'wood'],
    metal:['металл', 'metal'],
    ceramic:['керамика', 'ceramic'],
    glass:['стекло', 'glass'],
    steel:['сталь', 'steel'],
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
    title: string[]
    description?: string
    probe?: string
    partNumber: string
    weight?: number
    price:number
    availability?: number
    colors?:[string, string][]
    img:string[]
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