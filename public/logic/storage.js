console.log("%c> storage.js", "color: rgba(212, 7, 255, 1); font-size: 2rem; margin-top: 1rem; padding-left: 2rem;")
import { addItem } from "./main.js";


const item1 = {
    id: 'jkjk19861776',
    qr: 'asdf-asdf-asdf',
    location: '1a1a1a',
    route: 'storage/u12345678/1/a/1/a/1/a',
    name: 'Thing 1',
    description: 'This is something I found in 1994 in Millheim, PA.',
    notes: [
        'DO NOT THROW OUT'
    ],
    fragile: false,
    materials: ['oak wood', 'stainless steel', 'clear plastic'],
    size: {
        w: 25,
        h: 55,
        d: 25
    },
    weight: 8.5,
    relations: [
        'jkjk19861775',
        'jkjk19861777',
        'jkjk19861778',
        'jkjk19861779',
        'jkjk19861780'
    ]
}
const item2 = {
    id: 'jkjk19861777',
    qr: 'asdf-asdf-fdsa',
    location: '1a1a1b',
    route: 'storage/u12345678/1/a/1/a/1/b',
    name: 'Thing 2',
    description: 'This is something else I found in 1994 in Millheim, PA.',
    notes: [
        'DO NOT THROW OUT'
    ],
    fragile: true,
    materials: ['stainless steel', 'clear plastic'],
    size: {
        w: 5,
        h: 15,
        d: 5
    },
    weight: 1.5,
    relations: [
        'jkjk19861775',
        'jkjk19861776',
        'jkjk19861778',
        'jkjk19861779',
        'jkjk19861780'
    ]
}

addItem(item1);
addItem(item2);

// console.log(`${item1}`)
// const jsonString = JSON.stringify(item1)

// console.log(jsonString)