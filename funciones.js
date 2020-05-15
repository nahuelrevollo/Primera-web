// JavaScript source code

function validacion()

{

    var T_Nombre = document.getElementById("txtNombre").value;
    var T_Correo = document.getElementById("txtMail").value;
    var T_Mensaje = document.getElementById("txtMensaje").value;


    if ((T_Nombre == "") || (T_Correo == "") || (T_Mensaje==""))

    {
        alert("Para continuar tiene que completar todos los campos");

    }

}