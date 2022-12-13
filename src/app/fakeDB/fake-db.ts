import {Sandwich} from "src/app/models/sandwich.models"
import {Sauce} from "src/app/models/sauce.models"
import {Garnish} from "src/app/models/garnish.model"

export const SANDWICHS: Sandwich[]=[
    {id : 1, name : "fromage", description :"", amount:3.5},
    {id : 2, name : "jambon", description :"", amount:3.5},
];

export const SAUCES: Sauce[]=[
    {id : 1, name : "mayonnaise", amount:1},
    {id : 2, name : "ketchup", amount:0.5},
];

export const GARNISH: Garnish[]=[
    {id : 1, name : "tomate", amount:1},
    {id : 2, name : "oeuf", amount:0.5},
];
