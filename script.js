document.getElementById("contact").addEventListener("submit", function(event){
    event.preventDefault();

    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var city = document.getElementById("city").value;

    var data = {
        name: name,
        lastname: lastname,
        phone: phone,
        email: email,
        city: city,
    };

    fetch("http://127.0.0.1:/api/contact", {
        method: "POST",
        headers: {
            "content-Type": "application/json"
        },
        body: JSON, stringify(data)
    })
    .them(function(response) {
        if (response.ok) {
        alert("Datos enviados correctamente");
        } else {
            alert("Error al enviar datos");
        }
    })
    .catch(function(error){
        alert("Error al enviar datos")
    });
});