function validacion() {
    nombre = document.datos.nombre;
    apellido = document.datos.apellido;
    mail = document.datos.mail;
    celu = document.datos.celu;    

    if(nombre.value.trim() == "" || nombre.value.trim().length > 25) {
        alert("Ingrese un nombre de 25 caracteres como máximo");
        nombre.className = "error";
        nombre.focus();
        return false;
    }
   
    else
        nombre.className = "normal";

    if(apellido.value.trim() == "" || apellido.value.trim().length > 25) {
        alert("Ingrese un apellido de 25 caracteres como máximo");
        apellido.className = "error";
        apellido.focus();
        return false;
    }
    else
        apellido.className = "normal";
    
    if(isNaN(edad.value.trim()) || edad.value.trim() < 18) {
            alert("Debe ser mayor a 18 años");
            edad.className = "error";
            edad.focus();
            return false;
        }
     else
            edad.className = "normal";

    if(mail.value.trim() == "" || mail.value.trim() == "@") {
        alert("Ingrese un mail con @ porfavor");
        mail.className = "error";
        mail.focus();
        return false;
        }
    else
        mail.className = "normal";

    if(isNaN(celu.value.trim()) || celu.value.trim().length > 15 || celu.value.trim() == "") {
        alert("Ingrese un celular de 15 digitos como máximo");
        celu.className = "error";
        celu.focus();
        return false;
    }
    else
        celu.className = "normal";

    
    if(confirm("¿Está seguro que desea enviar los datos?")){
        alert("Gracias por suscribirse! Le enviaremos beneficios exclusivos por el mail o celular ingresado!");
        return true;
    }

    else
        return false;
    }