document.getElementById('accederBtn').addEventListener('click', function() {
    document.getElementById('accederBtn').style.display = 'none';
    document.getElementById('imagen1').style.display = 'block';
    setTimeout(function() {
        setTimeout(function() {
            document.getElementById('imagen1').style.display = 'none';
            document.getElementById('imagen2').style.display = 'block';
            setTimeout(function() {
                setTimeout(function() {
                    document.getElementById('imagen2').style.display = 'none';
                    document.getElementById('passwordInput').style.display = 'block';
                    document.getElementById('validarBtn').style.display = 'block';
                }, 400);
            }, 4000);
        }, 400);
    }, 4000);
});

document.getElementById('validarBtn').addEventListener('click', function() {
    var password = document.getElementById('passwordInput').value;
    // Realiza la validación de la contraseña como desees
    if (password === '0509') {
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('validarBtn').style.display = 'none';
        document.getElementById('modalTin').style.display = 'block';
    } else if(password === '0403') {
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('validarBtn').style.display = 'none';
        document.getElementById('modalAdled').style.display = 'block';
    } else if(password === '2512') {
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('validarBtn').style.display = 'none';
        document.getElementById('modalAngel').style.display = 'block';
    } else if(password === '6245') {
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('validarBtn').style.display = 'none';
        document.getElementById('modalRhadav').style.display = 'block';
    } else if(password === '1111') {
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('validarBtn').style.display = 'none';
        document.getElementById('modalJae').style.display = 'block';
    } else if(password === '1313') {
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('validarBtn').style.display = 'none';
        document.getElementById('modalDami').style.display = 'block';
    } else if(password === '2113') {
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('validarBtn').style.display = 'none';
        document.getElementById('modalDomi').style.display = 'block';
    } else if(password === '9231') {
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('validarBtn').style.display = 'none';
        document.getElementById('modalJudas').style.display = 'block';
    } else if(password === '6666') {
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('validarBtn').style.display = 'none';
        document.getElementById('modalJack').style.display = 'block';
    } else if(password === '1112') {
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('validarBtn').style.display = 'none';
        document.getElementById('modalLuqi').style.display = 'block';
    } else if(password === '2133') {
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('validarBtn').style.display = 'none';
        document.getElementById('modalMati').style.display = 'block';
    } else if(password === '5555') {
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('validarBtn').style.display = 'none';
        document.getElementById('modalMiu').style.display = 'block';
    } else if(password === '5326') {
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('validarBtn').style.display = 'none';
        document.getElementById('modalSanti').style.display = 'block';
    } else if(password === '1243') {
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('validarBtn').style.display = 'none';
        document.getElementById('modalWren').style.display = 'block';
    } else if(password === '2121') {
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('validarBtn').style.display = 'none';
        document.getElementById('modalAki').style.display = 'block';
    } else {
        alert('Contraseña incorrecta');
    }
});