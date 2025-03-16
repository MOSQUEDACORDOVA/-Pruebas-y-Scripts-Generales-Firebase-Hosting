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
iframe.src = 'https://sistemanube.net/popUpInicio'; // URL del archivo HTML en la CDN
document.body.appendChild(iframe);

// Mostrar la ventana emergente al hacer clic en el botón
button.addEventListener('click', () => {
  iframe.style.display = 'block';
});

(function () {
  if (LS.customer) {
      console.log("Cliente autenticado con ID:", LS.customer);
      iframe.src = 'https://sistemanube.net/popUpMyAccount'; // URL del archivo HTML para clientes autenticados
  } else {
      console.log("No hay un cliente autenticado.");
  }
})();
