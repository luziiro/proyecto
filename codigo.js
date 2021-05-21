document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length < 8) {
      alert('Por favor escriba su nombre completo');
      return;
    }
    var correo = document.getElementById('correo').value;
    if (correo.length == 0) {
      alert('Debe escribir su correo');
      return;
    }
    this.submit();

    var rut = document.getElementById('rut').value;
    if(rut.length < 9) {
      alert('Por favor escriba bien su rut');
      return;
    }
    this.submit();
    
    var residencia = document.getElementById('residencia').value;
    if (residencia.length < 3) {
      alert('Debe escribir su ciudad');
      return;
    }
    this.submit();

    var campotexto = document.getElementById('campotexto').value;
    if (campotexto.length < 50) 
    {
      alert('Por favor, escriba 50 palabras o más');
      return;
    }
    this.submit();

  }