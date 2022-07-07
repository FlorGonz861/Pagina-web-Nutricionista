var BotonAdicionar = document.querySelector("#adicionar-paciente");

BotonAdicionar.addEventListener('click', (event) =>{
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosPacientes(form);
    var pacienteTr = construirTr(paciente);

    var error = validarPaciente(paciente); 
    if(error.length>0){
        var mensajeError = document.querySelector("#mensaje-error");
        mensajeError.textContent = error;
        return;
    }

    var tabla = document.querySelector("#tabla-pacientes");
    tabla.appendChild(pacienteTr);
    form.reset();
});

function capturarDatosPacientes(form){
   //Capturando los datos del formulario
   var paciente = {
       nombre:form.nombre.value,
       peso:form.peso.value,
       altura:form.altura.value,
       gordura:form.gordura.value,
       imc:calcularIMC(form.peso.value,form.altura.value)
   }
    
    return paciente;
}

function construirTr(paciente){
    //Crear los tr
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(construirTd(paciente.nombre, "info-nombre"));
    pacienteTr.appendChild(construirTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(construirTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(construirTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(construirTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function construirTd(dato, clase){
    var td = document.createElement("td");
    td.classList.add(clase);
    td.textContent = dato;

    return td;
}

function validarPaciente(paciente){
    if(!validarPeso(paciente.peso)){
        return "El peso es incorrecto";
    }else{
        return "";
    }
}