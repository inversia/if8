import { Product } from './types'

export const products: Product[] = [

/*  Interior    */

    
/*  Jewellery    */

    {
        category: 'jewellery',
        subcategory: 'rings',
        material: 'silver',
        title: 'Кольцо «Солнце» (Серо-красное)',
        partNumber: '5257',
        weight: 4.56,
        price: 1000,
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
        description: 'Фантазийный гранат 4-0,024ct, 5-0,035сt, 47-0,517сt, 2-0,028сt, 3-0,06сt, 127-3,175ct, 15-0,45ct (4.289)',
        probe: 750,
        partNumber: '5381(960)',
        weight: 7.39,
        price: 1000,
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
        description: 'Бр-ты 8кр57 – 0,069 ct, 12кр57 – 0,118 ct, 6кр57 – 0,08 ct, (0,269)',
        probe: 750,
        partNumber: '5406(975)',
        weight: 6.67,
        price: 1000,
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
        description: 'Турмалин 1,51 ct',
        probe: 750,
        partNumber: '5311(956)',
        weight: 4.545,
        price: 1000,
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
        description: 'лунный 0,76 ct',
        probe: 750,
        partNumber: '5373(944)',
        weight: 4.07,
        price: 1000,
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
        description: 'сапфирин 16,20 ct',
        probe: 750,
        partNumber: '5390(966)',
        weight: 9.68,
        price: 1000,
        availability: 1,
        colors: [['url(~/images/yellow.jpg)', '103CD9'], ['url(~/images/red.jpg)', '119676'], ['url(~/images/red.jpg)', 'C6651E']],
        img: 'pusetas-blue-sapfirin-gold',
        id:'pusetas2'
    },

    {
        category: 'jewellery',
        subcategory: 'earrings',
        material: 'gold',
        title: 'Серьги из коллекции «Перу»',
        description: 'кварц 9,15 ct, Лунные 5,25 ct',
        probe: 750,
        partNumber: '5252(929)',
        weight: 7.8,
        price: 1000,
        availability: 1,
        colors: [['url(~/images/yellow.jpg)', 'BDD7FF'], ['url(~/images/red.jpg)', 'EAC5E6'], ['url(~/images/red.jpg)', 'CAE3E2']],
        img: 'earrings-peru-gold-moon',
        id:'earrings1'
    },

    {
        category: 'jewellery',
        subcategory: 'earrings',
        material: 'gold',
        title: 'Серьги «Красная клетка»',
        description: 'везувиан 16,5 ct',
        probe: 750,
        partNumber: '5376(945)',
        weight: 18.8,
        price: 1000,
        availability: 1,
        colors: [['url(~/images/yellow.jpg)', 'BDD7FF'], ['url(~/images/red.jpg)', 'EAC5E6'], ['url(~/images/red.jpg)', 'CAE3E2']],
        img: 'earrings-red-cell-gold2',
        id:'earrings2'
    },

    {
        category: 'jewellery',
        subcategory: 'earrings',
        material: 'gold',
        title: 'Серьги «Сфера»',
        description: 'Цавориты 16 – 0,096 ct, 12 - 0,12сt, 40 - 0,56сt, 272 - 5,44сt, 25 - 0,75сt (6,966)',
        probe: 750,
        partNumber: '5341(942)',
        weight: 13.63,
        price: 1000,
        availability: 1,
        colors: [['url(~/images/yellow.jpg)', 'BDD7FF'], ['url(~/images/red.jpg)', 'EAC5E6'], ['url(~/images/red.jpg)', 'CAE3E2']],
        img: 'earrings-sphere-gold-green2',
        id:'earrings3'
    },

    {
        category: 'jewellery',
        subcategory: 'earrings',
        material: 'gold',
        title: 'Серьги «Спираль.Перу»',
        description: 'Бр-ты 316кр57 – 1,896 ct, 4кр57 – 0,026 ct (1,922)',
        probe: 750,
        partNumber: '5111(909)',
        weight: 10.62,
        price: 1000,
        availability: 1,
        colors: [['url(~/images/yellow.jpg)', 'B70000'], ['url(~/images/red.jpg)', '1E2CAA']],
        img: 'earrings-spiral-peru-gold-red',
        id:'earrings4'
    },

    {
        category: 'jewellery',
        subcategory: 'earrings',
        material: 'gold',
        title: 'Серьги «Кипу» бирюза',
        description: 'жемчуг 2,0 ct',
        probe: 750,
        partNumber: '5388(964)',
        weight: 10.27,
        price: 1000,
        availability: 1,
        colors: [['url(~/images/yellow.jpg)', '34E4E4'], ['url(~/images/red.jpg)', '00854D'], ['url(~/images/red.jpg)', '8F0808'], ['url(~/images/red.jpg)', '000000']],
        img: 'earrings-kipu-turquoise-gold',
        id:'earrings5'
    },

    {
        category: 'jewellery',
        subcategory: 'earrings',
        material: 'gold',
        title: 'Серьги «Кипу» чёрные',
        description: 'муассониты 0,6 ct',
        probe: 750,
        partNumber: '5275(961)',
        weight: 9.35,
        price: 1000,
        availability: 1,
        colors: [['url(~/images/yellow.jpg)', '34E4E4'], ['url(~/images/red.jpg)', '00854D'], ['url(~/images/red.jpg)', '8F0808'], ['url(~/images/red.jpg)', '000000']],
        img: 'earrings-kipu-black-gold',
        id:'earrings6'
    },

    {
        category: 'jewellery',
        subcategory: 'neck',
        material: 'gold',
        title: 'Подвеска «Подушка» «IF8» красная',
        description: 'везувиан 0,55 ct, шнурок 0,41гр',
        probe: 750,
        partNumber: '5412(979)',
        weight: 4.23,
        price: 1000,
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
        price: 1000,
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
        probe: 750,
        partNumber: '5227',
        weight: 4.88,
        price: 1000,
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
        description: 'синие сапфиры 18 - 0,126ct, 1 - 0,011сt, 7 - 0,098сt, 162 - 4.05сt,  (4,285)',
        probe: 750/585,
        partNumber: '5430',
        weight: 6.39,
        price: 1000,
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
        price: 1000,
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
        description: 'малахит 6,8 ct Ситал 10,5 ct',
        partNumber: '5345',
        weight: 7.30,
        price: 1000,
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
        description: 'ситал 0,8 ct',
        partNumber: '5366',
        weight: 4.74,
        price: 1000,
        availability: 1,
        colors: [['url(~/images/yellow.jpg)', '1122B9']],
        img: 'earrings-vasilki-silver',
        id:'earrings8'
    },
    
]

import keyBy from 'lodash/keyBy'

export const productsById = keyBy (products, 'id')