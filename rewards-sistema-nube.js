// Cargar el archivo CSS
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'https://pruebasy-scripts-genera-97j72j.web.app/styles.css'; // URL del archivo CSS en la CDN
document.head.appendChild(link);

// Crear el botón flotante
const button = document.createElement('button');
button.id = 'floatingButton';
button.innerText = 'Externo 2';
button.style.position = 'fixed';
button.style.bottom = '20px';
button.style.left = '20px';
button.style.padding = '10px 20px';
button.style.backgroundColor = '#007BFF';
button.style.color = '#FFF';
button.style.border = 'none';
button.style.borderRadius = '5px';
button.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.3)';
button.style.cursor = 'pointer';

// Agregar el botón al cuerpo del documento
document.body.appendChild(button);

// Cargar el contenido de la ventana emergente desde un archivo HTML
fetch('https://pruebasy-scripts-genera-97j72j.web.app/popup.html', { mode: 'cors' }) // URL del archivo HTML en la CDN
  .then(response => response.text())
  .then(html => {
    document.body.insertAdjacentHTML('beforeend', html);

    // Obtener referencia al popup
    const popup = document.getElementById('popup');

    // Mostrar la ventana emergente al hacer clic en el botón
    button.addEventListener('click', () => {
      popup.style.display = 'block';
    });
  })
  .catch(error => console.error('Error al cargar el HTML:', error));