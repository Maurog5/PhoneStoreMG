import { Estado } from "./estado";
import { Pais } from "./pais";

export interface Phone {
image_url: any;
    id: number;
    nombre: string;
    price: number;
    data: string;
    modelo: string;
    pais: Pais;
    estado: Estado;
    image_ur:string;
  }