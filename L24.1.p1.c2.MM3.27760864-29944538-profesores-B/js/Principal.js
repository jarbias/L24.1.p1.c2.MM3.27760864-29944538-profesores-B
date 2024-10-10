//En la Universidad se le paga a cada profesores un bono, sin embargo si es personal fijo tiene 
//un sueldo y si es contratado tiene cantidad de horas, donde cada una se paga a $10. Considere 
//que a todos los profesores se les pide su nombre, y las clases Cl_fijo y Cl_contratado heredan 
//de la clase Cl_profesor. 
//Haga un programa que haga uso de la misma clase Cl_profesor del ejercicio anterior, lea los 
//datos de un profesor contratado y reporte su ingreso total. 
import Cl_Contratado from "./Cl_Contratado.js";
import Cl_fijo from "./Cl_Fijo.js";

let contratado1 = new Cl_Contratado("rafael",30,"contratado",15);
let contratado2 = new Cl_Contratado("felicia",30,"contratado",20);

contratado1.sueldototal();
contratado2.sueldototal();
let salida= document.getElementById("salida");
salida.innerHTML+= "nombre del profesor contratado: "+contratado1.nombre+"<br>" + "Monto del bono: "+contratado1.bono+"$"+"<br>"+ "cantidad de horas: "+contratado1.horas+"<br>"+ "ingreso total del profesor "+contratado1.nombre+" es: "+contratado1.sueldototal()+"$"+"<br><br>";
salida.innerHTML+= "nombre del profesor contratado: "+contratado2.nombre+"<br>" + "Monto del bono: "+contratado2.bono+"$"+"<br>"+ "cantidad de horas: "+contratado2.horas+"<br>"+ "ingreso total del profesor "+contratado2.nombre+" es: "+contratado2.sueldototal()+"$";