import { jewellery } from './jewellery'
import { interior } from './interior'


export const categories = {
    jewellery,
    interior
} as const


export type Category = keyof typeof categories

