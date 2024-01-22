import { Cocktail } from "../models/cocktail";

export const COCKTAILS: Cocktail[] = [
    {name:"Exquisious", price:11, image:"data:image/jpeg;base64,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"},
    {name:"Aqua velva", price:13, image:"data:image/jpeg;base64,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"}
]