import { atom } from 'recoil'

export const widthchild = atom< number>({
    key: 'with-child',
    default: 0
})

export const heightchild = atom< number>({
    key: 'height-child',
    default: 0
})

export const image = atom< string>({
    key:'imagebackground',
    default: ''
})

export const mapingchild = atom< any[]>({
    key:'mapingchild',
    default: []
})