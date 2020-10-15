import { Product } from './types'

export const products: Product[] = [

/*  Interior    */

    
/*  Jewellery    */

    {
        category: 'jewellery',
        subcategory: 'rings',
        material: 'silver',
        title: 'Кольцо «Солнце» (красное)',
        partNumber: '5243',
        weight: 4.88,
        price: 16800,
        availability: 1,
        colors: [['url(~/images/yellow.jpg)', 'E50101'], ['url(~/images/red.jpg)', '1C0CD1'], ['url(~/images/blue.jpg)', '00856D'], ['url(~/images/blue.jpg)', '3DD39D']],
        img: 'ring-sun-grey',
        id:'ring1'
    },

    {
        category: 'jewellery',
        subcategory: 'rings',
        material: 'gold',
        title: 'Кольцо «Сфера»',
        description: 'Фантазийный гранат',
        probe: [750],
        partNumber: '960',
        weight: 7.39,
        price: 244060,
        availability: 1,
        colors: [['url(~/images/yellow.jpg)', '6B8D89'], ['url(~/images/red.jpg)', '4AD6DF']],
        img: 'ring-sphere-gold-grey',
        id:'ring2'
    },

    {
        category: 'jewellery',
        subcategory: 'rings',
        material: 'gold',
        title: 'Кольцо «Бабочка» «IF8»',
        description: 'Бр-ты 0,269 ct',
        probe: [750],
        partNumber: '975',
        weight: 6.67,
        price: 176860,
        availability: 1,
        colors: [['url(~/images/yellow.jpg)', '6B8D89'], ['url(~/images/red.jpg)', '4AD6DF']],
        img: 'ring-butterfly-gold',
        id:'ring3'
    },

    {
        category: 'jewellery',
        subcategory: 'rings',
        material: 'gold',
        title: 'Кольцо «IF8»',
        description: 'Турмалин',
        probe: [750],
        partNumber: '956',
        weight: 4.545,
        price: 122500,
        availability: 1,
        colors: [['url(~/images/yellow.jpg)', '769C9E'], ['url(~/images/red.jpg)', '1ED2DD'], ['url(~/images/red.jpg)', 'C9E4ED'], ['url(~/images/red.jpg)', '10976E'], ['url(~/images/red.jpg)', '850020'], ['url(~/images/red.jpg)', '0A0264']],
        img: 'ring-if8-gold',
        id:'ring4'
    },

    {
        category: 'jewellery',
        subcategory: 'earrings',
        material: 'gold',
        title: 'Пусеты из коллекции «IF8» бирюза',
        description: 'лунный',
        probe: [750],
        partNumber: '944',
        weight: 4.07,
        price: 80900,
        availability: 1,
        colors: [['url(~/images/yellow.jpg)', '3FDCD3'], ['url(~/images/red.jpg)', '000000']],
        img: 'pusetas-pillow-if8-gold',
        id:'pusetas1'
    },

    {
        category: 'jewellery',
        subcategory: 'earrings',
        material: 'gold',
        title: 'Пусеты синие',
        description: 'сапфирин',
        probe: [750],
        partNumber: '966',
        weight: 9.68,
        price: 145090,
        availability: 1,
        colors: [['url(~/images/yellow.jpg)', '103CD9'], ['url(~/images/red.jpg)', '119676'], ['url(~/images/red.jpg)', 'C6651E']],
        img: 'pusetas-blue-sapfirin-gold',
        id:'pusetas2'
    },

    {
        category: 'jewellery',
        subcategory: 'earrings',
        material: 'silver',
        title: 'Серьги «IF8» опал',
        description: 'Лунный, ситал',
        probe: [750],
        partNumber: '5338',
        weight: 6.64,
        price: 36400,
        availability: 1,
        colors: [['url(~/images/yellow.jpg)', 'BDD7FF'], ['url(~/images/red.jpg)', 'EAC5E6'], ['url(~/images/red.jpg)', 'CAE3E2']],
        img: 'earrings-peru-gold-moon',
        id:'earrings1'
    },

    // {
    //     category: 'jewellery',
    //     subcategory: 'earrings',
    //     material: 'gold',
    //     title: 'Серьги «Красная клетка»',
    //     description: 'везувиан 16,5 ct',
    //     probe: [750],
    //     partNumber: '5376(945)',
    //     weight: 18.8,
    //     price: 700,
    //     availability: 1,
    //     colors: [['url(~/images/yellow.jpg)', 'BDD7FF'], ['url(~/images/red.jpg)', 'EAC5E6'], ['url(~/images/red.jpg)', 'CAE3E2']],
    //     img: 'earrings-red-cell-gold2',
    //     id:'earrings2'
    // },

    {
        category: 'jewellery',
        subcategory: 'earrings',
        material: 'gold',
        title: 'Серьги «Сфера»',
        description: 'Цавориты',
        probe: [750],
        partNumber: '942',
        weight: 13.63,
        price: 427020,
        availability: 1,
        colors: [['url(~/images/yellow.jpg)', 'BDD7FF'], ['url(~/images/red.jpg)', 'EAC5E6'], ['url(~/images/red.jpg)', 'CAE3E2']],
        img: 'earrings-sphere-gold-green2',
        id:'earrings3'
    },

    // {
    //     category: 'jewellery',
    //     subcategory: 'earrings',
    //     material: 'gold',
    //     title: 'Серьги «Спираль.Перу»',
    //     description: 'Бр-ты 316кр57 – 1,896 ct, 4кр57 – 0,026 ct (1,922)',
    //     probe: [750],
    //     partNumber: '5111(909)',
    //     weight: 10.62,
    //     price: 900,
    //     availability: 1,
    //     colors: [['url(~/images/yellow.jpg)', 'B70000'], ['url(~/images/red.jpg)', '1E2CAA']],
    //     img: 'earrings-spiral-peru-gold-red',
    //     id:'earrings4'
    // },

    {
        category: 'jewellery',
        subcategory: 'earrings',
        material: 'gold',
        title: 'Серьги «Кипу» бирюза',
        description: 'жемчуг',
        probe: [750],
        partNumber: '964',
        weight: 10.27,
        price: 193970,
        availability: 1,
        colors: [['url(~/images/yellow.jpg)', '34E4E4'], ['url(~/images/red.jpg)', '00854D'], ['url(~/images/red.jpg)', '8F0808'], ['url(~/images/red.jpg)', '000000']],
        img: 'earrings-kipu-turquoise-gold',
        id:'earrings5'
    },

    // {
    //     category: 'jewellery',
    //     subcategory: 'earrings',
    //     material: 'gold',
    //     title: 'Серьги «Кипу» чёрные',
    //     description: 'муассониты 0,6 ct',
    //     probe: [750],
    //     partNumber: '5275(961)',
    //     weight: 9.35,
    //     price: 140,
    //     availability: 1,
    //     colors: [['url(~/images/yellow.jpg)', '34E4E4'], ['url(~/images/red.jpg)', '00854D'], ['url(~/images/red.jpg)', '8F0808'], ['url(~/images/red.jpg)', '000000']],
    //     img: 'earrings-kipu-black-gold',
    //     id:'earrings6'
    // },

    {
        category: 'jewellery',
        subcategory: 'neck',
        material: 'gold',
        title: 'Подвеска «Подушка» «IF8» красная',
        description: 'везувиан',
        probe: [750],
        partNumber: '979',
        weight: 4.23,
        price: 76660,
        availability: 1,
        colors: [['url(~/images/yellow.jpg)', '34E4E4'], ['url(~/images/red.jpg)', '00854D'], ['url(~/images/red.jpg)', '8F0808'], ['url(~/images/red.jpg)', '000000']],
        img: 'pendant-pillow-gold-red',
        id:'neck1'
    },

    {
        category: 'jewellery',
        subcategory: 'corporate',
        material: 'silver',
        title: 'Запонки «IF8» (Черно-зеленые)',
        partNumber: '5380',
        weight: 13.57,
        price: 23200,
        availability: 1,
        colors: [['url(~/images/yellow.jpg)', '127149']],
        img: 'cufflinks-green-silver',
        id:'corporate1'
    },

    {
        category: 'jewellery',
        subcategory: 'bracelets',
        material: 'gold',
        title: 'Браслет голубой',
        probe: [750],
        partNumber: '5227',
        weight: 4.88,
        price: 91860,
        availability: 1,
        colors: [['url(~/images/yellow.jpg)', '00F0FF']],
        img: 'bracelet-gold-skyblue',
        id:'bracelets1'
    },

    {
        category: 'jewellery',
        subcategory: 'bracelets',
        material: 'gold',
        title: 'Браслет «Сфера» синий',
        description: 'синие сапфиры',
        probe: [750, 585],
        partNumber: '5430',
        weight: 6.39,
        price: 244060,
        availability: 1,
        colors: [['url(~/images/yellow.jpg)', '7D73F3'], ['url(~/images/yellow.jpg)', 'BBBBBB'], ['url(~/images/yellow.jpg)', '197850'], ['url(~/images/yellow.jpg)', '886945']],
        img: 'bracelet-sphere-gold-blue',
        id:'bracelets2'
    },

    {
        category: 'jewellery',
        subcategory: 'rings',
        material: 'silver',
        title: 'Кольцо «Инти» (Синее)',
        partNumber: '5234',
        weight: 5.89,
        price: 20800,
        availability: 1,
        colors: [['url(~/images/yellow.jpg)', '1F23D2'], ['url(~/images/yellow.jpg)', '0A7454']],
        img: 'ring-inti-silver-blue',
        id:'ring5'
    },

    {
        category: 'jewellery',
        subcategory: 'earrings',
        material: 'silver',
        title: 'Cерьги «IF8» розовые',
        description: 'малахит, ситал',
        partNumber: '5345',
        weight: 7.30,
        price: 36400,
        availability: 1,
        colors: [['url(~/images/yellow.jpg)', 'E182EA'], ['url(~/images/yellow.jpg)', 'D0D4FD'], ['url(~/images/yellow.jpg)', '7B9BD8'], ['url(~/images/yellow.jpg)', '42BDF1']],
        img: 'earrings-if8-silver-rose',
        id:'earrings7'
    },

    {
        category: 'jewellery',
        subcategory: 'earrings',
        material: 'silver',
        title: 'Cерьги «Васильки»',
        description: 'ситал',
        partNumber: '5366',
        weight: 4.74,
        price: 17400,
        availability: 1,
        colors: [['url(~/images/yellow.jpg)', '1122B9']],
        img: 'earrings-vasilki-silver',
        id:'earrings8'
    },
    
]

import keyBy from 'lodash/keyBy'

export const productsById = keyBy (products, 'id')