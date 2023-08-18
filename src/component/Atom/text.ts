import { atom } from "recoil";
import { Font } from "../type/type";

export const x = atom< number>({
    key: 'x',
    default: 0,
})
export const y = atom< number>({
    key: 'y',
    default: 0,
})
export const font = atom< Font[]>({
    key: 'font',
    default: []
})