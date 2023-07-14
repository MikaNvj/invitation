import { atom } from 'recoil';

export const width = atom< number>({
    key: 'width',
    default: 720
})

export const height = atom< number>({
    key: 'height',
    default: 496,
})