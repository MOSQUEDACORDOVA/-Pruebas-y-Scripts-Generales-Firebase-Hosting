// Detectar tienda
if (LS.store.id) {
  console.log("Tienda Actual:", LS.store.id);
  console.log("URL de tienda:", LS.store.url);
}
// Cargar el archivo CSS
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://pruebasy-scripts-genera-97j72j.web.app/styles.css?v=12'; // URL del archivo CSS en la CDN
//link.href = 'styles.css?v=4'; // URL del archivo CSS en la CDN
document.head.appendChild(link);

// Crear el botón flotante
const button = document.createElement('button');
button.id = 'floatingButton';

// Agregar el SVG directamente al botón
button.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 54 54" width="68" height="68">
    <rect width="53" height="53" x=".5" y=".5" fill="#3B3F5F" rx="26.5"/>
    <rect width="53" height="53" x=".5" y=".5" stroke="#141833" rx="26.5"/>
    <path fill="#F16450" fill-rule="evenodd" d="m19 19.3.5-1.1c.1-.4.4-.8.6-1.1a7.9 7.9 0 0 1 6.1-3.8c2.5-.3 4.5.5 6.3 1.8l.9.8c.4.4 1.2 1.3 1.4 1.9l-.6.5-5 4c-1.5 1-3 2.4-4.4 3.4l-7.5 6a5 5 0 0 1-3.6.3c-1.3-.4-2-.9-2.7-1.8-2.1-2.6-1-7.4 2.6-8.6 2.3-.7 3.4 0 5.1 1l.7.5c.8.4 1 .7 1.5 0 .6-.7 1.4-1.4.8-2-.2-.1-2.5-1.5-2.7-1.8Zm-2.8-.9c-1.8 0-2.8 0-4.3.7A8.7 8.7 0 0 0 9 21.3 9.4 9.4 0 0 0 7.2 29c.3 1.5 1.2 3 2.3 4a8 8 0 0 0 6.6 2c2.7-.3 4.3-2 6.3-3.6l1.4-1 2.8-2.3 7-5.6c1-.8 1.6-1.4 3.5-1.5 1.4-.1 3 .3 4 1a6 6 0 0 1 2.7 6.8c-1.2 4.2-6.7 5.2-9.7 2.8l-3.3-2.9c-.8-.5-1.2.4-1.5.8l-.6.7c-.2.4.2.8.6 1.1l.4.3 1 .9c1 .7 2 1.9 3.3 2.4a10 10 0 0 0 8.2 0A9 9 0 0 0 45 21.4l-.5-.7a9.3 9.3 0 0 0-6.2-2.6l-.4-.8c0-.3-.2-.5-.3-.8-.5-1-1.4-2-2-2.8a11.4 11.4 0 0 0-19.3 4.6ZM20 39.2c-3 .4-2.4 5 .6 4.5 2.8-.5 2.3-5-.7-4.5Zm6.7 0c-3 .4-2.4 5 .7 4.5 1.2-.2 2-1.4 1.8-2.6-.1-1.1-1.1-2-2.5-2Zm6.8 0a2.3 2.3 0 0 0-2 2.5 2.2 2.2 0 0 0 2.6 2c1.2-.2 2-1.3 1.9-2.6a2.2 2.2 0 0 0-2.5-2Z" clip-rule="evenodd"/>
    <path fill="#F16450" fill-rule="evenodd" d="m19 19.3.5-1.1c.1-.4.4-.8.6-1.1a7.9 7.9 0 0 1 6.1-3.8c2.5-.3 4.5.5 6.3 1.8l.9.8c.4.4 1.2 1.3 1.4 1.9l-.6.5-5 4c-1.5 1-3 2.4-4.4 3.4l-7.5 6a5 5 0 0 1-3.6.3c-1.3-.4-2-.9-2.7-1.8-2.1-2.6-1-7.4 2.6-8.6 2.3-.7 3.4 0 5.1 1l.7.5c.8.4 1 .7 1.5 0 .6-.7 1.4-1.4.8-2-.2-.1-2.5-1.5-2.7-1.8Zm-2.8-.9c-1.8 0-2.8 0-4.3.7A8.7 8.7 0 0 0 9 21.3 9.4 9.4 0 0 0 7.2 29c.3 1.5 1.2 3 2.3 4a8 8 0 0 0 6.6 2c2.7-.3 4.3-2 6.3-3.6l1.4-1 2.8-2.3 7-5.6c1-.8 1.6-1.4 3.5-1.5 1.4-.1 3 .3 4 1a6 6 0 0 1 2.7 6.8c-1.2 4.2-6.7 5.2-9.7 2.8l-3.3-2.9c-.8-.5-1.2.4-1.5.8l-.6.7c-.2.4.2.8.6 1.1l.4.3 1 .9c1 .7 2 1.9 3.3 2.4a10 10 0 0 0 8.2 0A9 9 0 0 0 45 21.4l-.5-.7a9.3 9.3 0 0 0-6.2-2.6l-.4-.8c0-.3-.2-.5-.3-.8-.5-1-1.4-2-2-2.8a11.4 11.4 0 0 0-19.3 4.6ZM20 39.2c-3 .4-2.4 5 .6 4.5 2.8-.5 2.3-5-.7-4.5Zm6.7 0c-3 .4-2.4 5 .7 4.5 1.2-.2 2-1.4 1.8-2.6-.1-1.1-1.1-2-2.5-2Zm6.8 0a2.3 2.3 0 0 0-2 2.5 2.2 2.2 0 0 0 2.6 2c1.2-.2 2-1.3 1.9-2.6a2.2 2.2 0 0 0-2.5-2Z" clip-rule="evenodd"/>
  </svg>
`;

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
  <path d="M19.9992 20L12 12M12.0009 20L20 12" stroke="#cccccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M29.3334 16C29.3334 8.6362 23.3638 2.66666 16.0001 2.66666C8.63628 2.66666 2.66675 8.6362 2.66675 16C2.66675 23.3637 8.63628 29.3333 16.0001 29.3333C23.3638 29.3333 29.3334 23.3637 29.3334 16Z" fill="black" fill-opacity="0.16" stroke="#cccccc" stroke-width="2"/>
  </svg>
`;

// Agregar funcionalidad al botón para cerrar el contenedor
closeButton.addEventListener('click', () => {
  iframeContainer.style.display = 'none';
  button.style.display = 'block'; // Mostrar el botón flotante
});

// Agregar el botón al contenedor
iframeContainer.appendChild(closeButton);

// Crear el iframe para la ventana emergente
const iframe = document.createElement('iframe');
iframe.id = 'popupIframe';
iframe.allow = 'clipboard-write'; // Agregar el atributo allow para permitir clipboard-write

// Asignar el parámetro tiendaId al iframe
iframe.src = `https://yenny-elateneo.web.app`; // URL del archivo HTML en la CDN con parámetro tiendaId

// Agregar el iframe al contenedor
iframeContainer.appendChild(iframe);

// Agregar el contenedor al cuerpo del documento
document.body.appendChild(iframeContainer);

// Mostrar la ventana emergente al hacer clic en el botón
button.addEventListener('click', () => {
  iframeContainer.style.display = 'block';
  button.style.display = 'none'; // Ocultar el botón flotante
});

// Ocultar el contenedor al hacer clic fuera de él
document.addEventListener('click', (event) => {
  const isClickInsideContainer = iframeContainer.contains(event.target) || button.contains(event.target);
  if (!isClickInsideContainer) {
    iframeContainer.style.display = 'none';
    button.style.display = 'block'; // Mostrar el botón flotante
  }
});

(function () {
  if (LS.customer && LS.store) {
      console.log("Cliente autenticado con ID:", LS.customer);
      console.log("Tienda ID:", LS.store.id);
      
      // Obtener el email del cliente usando la API
      const customerId = LS.customer.id || LS.customer;
      const storeId = LS.store.id;
      const apiUrl = `https://getcustomeremailhandler-2rimbhixdq-uc.a.run.app?customerId=${customerId}&storeId=${storeId}`;
      
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          if (data.success && data.data && data.data.email) {
            console.log("Email obtenido exitosamente:", data.data.email);
            iframe.src = `https://yenny-elateneo.web.app/login-email?email=${data.data.email}`;
          } else {
            console.error("Error al obtener el email:", data.message || "Respuesta inválida");
            // Fallback a la URL sin email
            iframe.src = `https://yenny-elateneo.web.app`;
          }
        })
        .catch(error => {
          console.error("Error en la solicitud del email:", error);
          // Fallback a la URL sin email
          iframe.src = `https://yenny-elateneo.web.app`;
        });
  } else {
      console.log("No hay un cliente autenticado o información de tienda.");
      iframe.src = `https://yenny-elateneo.web.app`;
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