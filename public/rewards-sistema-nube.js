// Detectar tienda
if (LS.store.id) {
  console.log("Tienda Actual:", LS.store.id);
  console.log("URL de tienda:", LS.store.url);
}
// Cargar el archivo CSS
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://pruebasy-scripts-genera-97j72j.web.app/styles.css?v=8'; // URL del archivo CSS en la CDN
//link.href = 'styles.css?v=4'; // URL del archivo CSS en la CDN
document.head.appendChild(link);

// Crear el botón flotante
const button = document.createElement('button');
button.id = 'floatingButton';

// Agregar el botón al cuerpo del documento
document.body.appendChild(button);

// Crear un contenedor para el iframe
const iframeContainer = document.createElement('div');
iframeContainer.id = 'iframeContainer';
iframeContainer.style.display = 'none'; // Oculto por defecto

// Crear un botón dentro del contenedor
const closeButton = document.createElement('button');
closeButton.id = 'closeButton';
closeButton.style.position = 'absolute';
closeButton.style.top = '10px';
closeButton.style.right = '10px';
closeButton.style.cursor = 'pointer';

// Agregar el ícono SVG al botón
closeButton.innerHTML = `
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M19.9992 20L12 12M12.0009 20L20 12" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M29.3334 16C29.3334 8.6362 23.3638 2.66666 16.0001 2.66666C8.63628 2.66666 2.66675 8.6362 2.66675 16C2.66675 23.3637 8.63628 29.3333 16.0001 29.3333C23.3638 29.3333 29.3334 23.3637 29.3334 16Z" fill="black" fill-opacity="0.16" stroke="#fff" stroke-width="2"/>
  </svg>
`;

// Agregar funcionalidad al botón para cerrar el contenedor
closeButton.addEventListener('click', () => {
  iframeContainer.style.display = 'none';
});

// Agregar el botón al contenedor
iframeContainer.appendChild(closeButton);

// Crear el iframe para la ventana emergente
const iframe = document.createElement('iframe');
iframe.id = 'popupIframe';
iframe.allow = 'clipboard-write'; // Agregar el atributo allow para permitir clipboard-write

// Asignar el parámetro tiendaId al iframe
iframe.src = `http://localhost:51699/popUpInicio?tiendaId=${LS.store.id}&storeURL=${LS.store.url}`; // URL del archivo HTML en la CDN con parámetro tiendaId

// Agregar el iframe al contenedor
iframeContainer.appendChild(iframe);

// Agregar el contenedor al cuerpo del documento
document.body.appendChild(iframeContainer);

// Mostrar la ventana emergente al hacer clic en el botón
button.addEventListener('click', () => {
  iframeContainer.style.display = 'block';
});

// Ocultar el contenedor al hacer clic fuera de él
document.addEventListener('click', (event) => {
  const isClickInsideContainer = iframeContainer.contains(event.target) || button.contains(event.target);
  if (!isClickInsideContainer) {
    iframeContainer.style.display = 'none';
  }
});

(function () {
  if (LS.customer) {
      console.log("Cliente autenticado con ID:", LS.customer);
      iframe.src = `http://localhost:51699/popUpMyAccount?lsCustomer=${LS.customer}&tiendaId=${LS.store.id}&storeURL=${LS.store.url}`; // URL del archivo HTML para clientes autenticados con parámetro tiendaId
  } else {
      console.log("No hay un cliente autenticado.");
  }
})();

window.addEventListener("message", function(event) {
  if (event.data?.type === "copiarCupon" && typeof event.data.valor === "string") {
    navigator.clipboard.writeText(event.data.valor).then(() => {
      console.log("¡Cupón copiado con valor:", event.data.valor);
    }).catch(err => {
      console.error("No se pudo copiar:", err);
    });
  }
});