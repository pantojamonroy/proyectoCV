

/*document.getElementById("contact").addEventListener("submit", function(event){
    event.preventDefault();*/
    
    function savecliente();

    let name = document.getElementById("name");
    let lastname = document.getElementById("lastname");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
    let city = document.getElementById("city");
    let message = document.getElementById("message");

    let cliente = {
        name: nameCliente.value,
        lastname: lastnameCliente.value,
        phone: phoneCliente.value,
        email: emailCliente.value,
        city: cityCliente.value,
        message: messageCliente.value
    };

    let url = "http://127.0.0.1:8000/api/clienteC";
    
    fetch(url,{
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON, stringify(cliente)
    }).them(function(response) {
        if (response.ok) {
        alert("Datos enviados correctamente");
        } else {
            alert("Error al enviar datos");
        }
    })
    .catch(function(error){
        alert("Error al enviar datos")
    });


    /*.them(function(response) {
        if (response.ok) {
        alert("Datos enviados correctamente");
        } else {
            alert("Error al enviar datos");
        }
    })
    .catch(function(error){
        alert("Error al enviar datos")
    });*/