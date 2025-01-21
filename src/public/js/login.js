document.getElementById("login").addEventListener("click", (event) => {
    //prevenir la recarga
    event.preventDefault();
    //componer el objeto a enviar en el servidor
let data = {
    mail: document.querySelector("#mail").value,
    password: document.querySelector("#password").value,
};
//componer el objeto de configuracion de la peticion POST para loguear
let config = {
    method: 'POST',
    headers: { "Content-Type":"application/json" },
    body: JSON.stringify(data)
}
    //fetchar y manejar la respuesta
    fetch('/api/auth/login', config)
        .then((res) => res.json())
        .then((res)=> localStorage.setItem('token', res.token) )
        .catch((err)=>console.log(err))
});

/*document.getElementById("signout").addEventListener("click", (event) => {
    //prevenir la recarga
    event.preventDefault();
})*/