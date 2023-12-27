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
        document.getElementById('modal').style.display = 'block';
    } else if(password === '0403') {
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('validarBtn').style.display = 'none';
        document.getElementById('nombre').innerText="Adled Snèdmazfuk";
        document.getElementById('icon').src="img/Adled.png";
        document.getElementById('modal').style.display = 'block';
    } else if(password === '2512') {
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('validarBtn').style.display = 'none';
        document.getElementById('nombre').innerText="Ángel Benedetti";
        document.getElementById('icon').src="img/Angel.png";
        document.getElementById('modal').style.display = 'block';
    } else if(password === '6245') {
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('validarBtn').style.display = 'none';
        document.getElementById('nombre').innerText="Antoine Hervé";
        document.getElementById('icon').src="img/Rhadav.png";
        document.getElementById('modal').style.display = 'block';
    } else if(password === '1111') {
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('validarBtn').style.display = 'none';
        document.getElementById('nombre').innerText="Asteriąn Snèdmazfuk";
        document.getElementById('icon').src="img/Jae.png";
        document.getElementById('modal').style.display = 'block';
    } else if(password === '1313') {
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('validarBtn').style.display = 'none';
        document.getElementById('nombre').innerText="Damian Astaroth";
        document.getElementById('icon').src="img/Dami.png";
        document.getElementById('modal').style.display = 'block';
    } else if(password === '2113') {
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('validarBtn').style.display = 'none';
        document.getElementById('nombre').innerText="Dominic";
        document.getElementById('icon').src="img/Domi.png";
        document.getElementById('modal').style.display = 'block';
    } else if(password === '9231') {
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('validarBtn').style.display = 'none';
        document.getElementById('nombre').innerText="Judas";
        document.getElementById('icon').src="img/Judas.png";
        document.getElementById('modal').style.display = 'block';
    } else if(password === '6666') {
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('validarBtn').style.display = 'none';
        document.getElementById('nombre').innerText="Jack Foster";
        document.getElementById('icon').src="img/Jack.png";
        document.getElementById('modal').style.display = 'block';
    } else if(password === '1112') {
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('validarBtn').style.display = 'none';
        document.getElementById('nombre').innerText="Gian Luca";
        document.getElementById('icon').src="img/Luqi.png";
        document.getElementById('modal').style.display = 'block';
    } else if(password === '2133') {
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('validarBtn').style.display = 'none';
        document.getElementById('nombre').innerText="Mattías Voruz";
        document.getElementById('icon').src="img/Mati.png";
        document.getElementById('modal').style.display = 'block';
    } else if(password === '5555') {
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('validarBtn').style.display = 'none';
        document.getElementById('nombre').innerText="Miuccia Ferretti";
        document.getElementById('icon').src="img/Miu.png";
        document.getElementById('modal').style.display = 'block';
    } else if(password === '5326') {
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('validarBtn').style.display = 'none';
        document.getElementById('nombre').innerText="Santiago";
        document.getElementById('icon').src="img/Santi.png";
        document.getElementById('modal').style.display = 'block';
    } else if(password === '1243') {
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('validarBtn').style.display = 'none';
        document.getElementById('nombre').innerText="Wren S. Hellsing";
        document.getElementById('icon').src="img/Wren.png";
        document.getElementById('modal').style.display = 'block';
    } else if(password === '2121') {
        document.getElementById('passwordInput').style.display = 'none';
        document.getElementById('validarBtn').style.display = 'none';
        document.getElementById('nombre').innerText="變精";
        document.getElementById('icon').src="img/Aki.png";
        document.getElementById('modal').style.display = 'block';
    } else {
        alert('Contraseña incorrecta');
    }
});