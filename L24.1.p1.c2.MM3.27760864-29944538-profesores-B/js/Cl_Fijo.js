import Cl_Profesor from "./Cl_Profesor.js";

export default class Cl_Fijo extends Cl_Profesor {
    constructor() {
        super(nombre,bono, {tipo:"Fijo"});
        this.sueldo = sueldo;
    }

}