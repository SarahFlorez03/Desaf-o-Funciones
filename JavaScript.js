
function calcularPrestamo (){
    let prestamo= parseInt(prompt("¿Cuánto dinero querés pedir prestado? (solo números)"));
    let añosAPagar= parseInt(prompt ("¿En cuántos años lo queres pagar? (solo números)"));
    let interes=80/100
   let deudaTotal= (prestamo * añosAPagar * interes);
   let cuota= deudaTotal/(añosAPagar*12);
   
   console.log ("Tu prestamo es de "+prestamo+ " Lo vas a pagar en "+añosAPagar+" años,con cuotas mensuales de "+cuota+"\nEn total vas a pagar "+deudaTotal);
}

calcularPrestamo();

