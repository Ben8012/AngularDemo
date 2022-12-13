import { Adress } from "./adress.model";

export interface User {
    username: string;
    password : string;
    addresses: Adress[];
};
