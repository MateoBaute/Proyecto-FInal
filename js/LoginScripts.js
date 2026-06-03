
<<<<<<< HEAD
function login(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let url = "http://localhost:8080/login?username=" + username + "&password=" + password + "&email=" + email;
=======
    if (username === "" || password === "" || email === "") {
        alert("Complete todos los campos.");
        return;
    }
>>>>>>> 627c313d183e2a60cc225735db96b0c69a1bafa2

    let user = {
        name: username,
        pass: password,
        mail: email
<<<<<<< HEAD
    }
    console.log(user)
if(!user){
    fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            if(user.username === username && user.password === password && user.email === email){
                alert("Inicio de sesion correcto");
                window.location.href = "index.html";
            } else {
                alert("Datos invalidos, intenta nuevamente.");
            }
    })
})
    .catch(error => {
        console.error("Error:", error);
        alert("Un error ocurrio durante el inicio de sesion. Intenta nuevamente.");
    });
  }
=======
    };

    sessionStorage.setItem("user", JSON.stringify(user));
    sessionStorage.setItem("islogged", "true");

    console.log(user);

    alert("Inicio de sesión correcto");
    window.location.href = "index.html";
>>>>>>> 627c313d183e2a60cc225735db96b0c69a1bafa2
}