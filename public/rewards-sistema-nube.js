// Detectar tienda
if (LS.store.id) {
  console.log("Tienda Actual:", LS.store.id);
}
// Cargar el archivo CSS
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://pruebasy-scripts-genera-97j72j.web.app/styles.css?v=5'; // URL del archivo CSS en la CDN
//link.href = 'styles.css?v=3'; // URL del archivo CSS en la CDN
document.head.appendChild(link);

// Crear el botón flotante
const button = document.createElement('button');
button.id = 'floatingButton';

// Agregar el botón al cuerpo del documento
document.body.appendChild(button);

// Crear el iframe para la ventana emergente
const iframe = document.createElement('iframe');
iframe.id = 'popupIframe';

// Asignar el parámetro tiendaId al iframe
iframe.src = `https://sistemanube.net/popUpInicio?tiendaId=${LS.store.id}`; // URL del archivo HTML en la CDN con parámetro tiendaId
document.body.appendChild(iframe);

// Mostrar la ventana emergente al hacer clic en el botón
button.addEventListener('click', () => {
  iframe.style.display = 'block';
});

(function () {
  if (LS.customer) {
      console.log("Cliente autenticado con ID:", LS.customer);
      iframe.src = `https://sistemanube.net/popUpMyAccount?tiendaId=${LS.store.id}`; // URL del archivo HTML para clientes autenticados con parámetro tiendaId
  } else {
      console.log("No hay un cliente autenticado.");
  }
})();
