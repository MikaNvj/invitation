import { atom } from 'recoil';

export const Data = atom({
    key:'data',
    default: []
})
export const Mappagedata = atom({
    key: 'mapdatapage',
    default: []
})
export const datashow =atom< boolean>({
    key: 'datashow',
    default: false
})

export const textmaping = atom< any[]>({
    key: 'textmapin',
    default: []
})