document.getElementById("registerForm").addEventListener("submit", async function(e){
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirm = document.getElementById("confirmPassword").value;
    const captcha = document.getElementById("captcha").value;

    if(password !== confirm){
        alert("Las contraseñas no coinciden");
        return;
    }

    if(captcha != 8){
        alert("Verificación incorrecta");
        return;
    }

    const response = await fetch("register.php",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({email,password,confirmPassword:confirm})
    });

    const result = await response.json();
    alert(result.message);
});
