import { Commento } from './commento';

export interface Piatto {
    id: number;
    titolo: string;
    image: string;
    label: string;
    prezzo: string;
    categoria: string;
    inevidenza: string;
    descrizione: string;
    commenti: Commento[];
}
