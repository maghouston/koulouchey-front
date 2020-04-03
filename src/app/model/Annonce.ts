import { Categorie } from './Categorie';
import { User } from './User';

export interface Annonce{
    libelle:string,
	prix:number,
	datePublication: Date,
	description:string,
	categorie: Categorie,
    vendeur: User
}