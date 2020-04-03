import { Adresse } from './Adresse';

export interface User{
    id: number,
    username: string,
    password:string,
    fullname:string,
    telephone:string,
    email:string,
    adresse: Adresse
}