var BotonAdicionar = document.querySelector("#adicionar-paciente");

BotonAdicionar.addEventListener('click', (event) =>{
    event.preventDefault();

    var form = document.querySelector("#form-adicionar");
    var paciente = capturarDatosPacientes(form);
    var pacienteTr = construirTr(paciente);
    var tabla = document.querySelector("#tabla-pacientes");

    tabla.appendChild(pacienteTr);
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
    //Crear los tds e un tr
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    var nombreTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    //Asignar los valores a la propiedad textContent
    nombreTd.textContent = paciente.nombre;
    alturaTd.textContent = paciente.altura;
    pesoTd.textContent = paciente.peso;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    //Asignacion al tr de los td, y la tabla el tr
    pacienteTr.appendChild(nombreTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}