import Cl_Profesor from "./Cl_Profesor.js";

export default class Cl_Fijo extends Cl_Profesor {
    constructor(nombre, bono, tipo, horas) {
        super(nombre, bono, tipo);
        this.horas= horas;
    }
    sueldototal() {
      if(this.tipo=="contratado") 
         return (this.horas * 10)+this.bono;
    }
   
}