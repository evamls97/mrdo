const btnSuscribirse = document.getElementById('btnSuscribirse');
const overlayEnviado = document.getElementById('overlayEnviado');
const btnCerrar      = document.getElementById('btnCerrar');

btnSuscribirse.addEventListener('click', function() {
  overlayEnviado.classList.add('activo');
});

btnCerrar.addEventListener('click', function() {
  overlayEnviado.classList.remove('activo');
});