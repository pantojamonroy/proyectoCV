/*document.getElementById("contact").addEventListener("submit", function(event){
    event.preventDefault();*/
    
    function obtenerDatos(){
        fetch(function(response){
            return response.json();
        }).then(function(response){
            var cliente = document.getElementById('cliente');
            cliente.innerHTML = response[1].cliente;
        })
    }
    function save(){
    let name = document.getElementById("name");
    let lastname = document.getElementById("lastname");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
    let city = document.getElementById("city");
    let message = document.getElementById("message");

    let cliente = {
        method: "POST",
        body: {
        name: nameCliente.value,
        lastname: lastnameCliente.value,
        phone: phoneCliente.value,
        email: emailCliente.value,
        city: cityCliente.value,
        message: messageCliente.value
    }
}
};

    fetch("http://127.0.0.1:8000/api/cliente", detalle)
    .then(function (response){
        return response.json();
    })
    .then(function(response){
        var estado = document.getElementById('estado');
        if(response.exito === true){
            estado.innerHTML = "EXITO";
        }else{
            estado.innerHTML = "Hubo problema al enviar datos";
        }
    });
    
    