// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {

  // Array de objetos que contiene la información de los testimonios
  const testimoniosData = [
    {
      nombre: "Maria Hernandez",
      texto: "Unirse al Poli Gym ha sido transformador. Los entrenadores están bien informados y la comunidad es increíblemente comprensiva.",
      estrellas: 5,  // Cantidad de estrellas (calificación)
      imagen: "../images/testimonio1.jpeg",  // Ruta de la imagen del testimonio
    },
    {
      nombre: "Alexander Bernal",
      texto: "Este servicio cambió mi vida. ¡Altamente recomendado!",
      estrellas: 5,
      imagen: "../images/testimonios2.jpeg",
    },
    {
      nombre: "Michael Motivar",
      texto: "Una experiencia increíble. El equipo es muy profesional y atento.",
      estrellas: 5,
      imagen: "../images/testimonio3.jpeg",
    },
  ];

  // Índice para rastrear el testimonio actual que se está mostrando
  let currentIndex = 0;

  // Función que actualiza el testimonio en la página
  function renderTestimonios() {
    // Obtener el testimonio actual basado en el índice
    const testimonio = testimoniosData[currentIndex];
    
    // Actualiza la imagen, el texto y el nombre del testimonio en el DOM
    document.getElementById("testimonio-imagen").src = testimonio.imagen;
    document.getElementById("testimonio-texto").textContent = testimonio.texto;
    document.getElementById("testimonio-nombre").textContent = testimonio.nombre;

    // Actualiza las estrellas del testimonio
    const estrellasDiv = document.getElementById("estrellas");
    estrellasDiv.innerHTML = "";  // Limpia las estrellas anteriores

    // Añade estrellas de acuerdo a la cantidad de 'estrellas' en el testimonio
    for (let i = 0; i < testimonio.estrellas; i++) {
      const estrella = document.createElement("span");
      estrella.classList.add("text-warning");  // Clase para aplicar el estilo de estrella
      estrella.textContent = "★";  // Agrega la estrella visualmente
      estrellasDiv.appendChild(estrella);  // Añade la estrella al contenedor
    }

    // Actualiza los puntos de paginación
    actualizarPuntos();
  }

  // Función para mostrar el siguiente testimonio
  function siguienteTestimonio() {
    currentIndex = (currentIndex + 1) % testimoniosData.length;  // Incrementa el índice circularmente
    renderTestimonios();  // Vuelve a renderizar los testimonios
  }

  // Función para mostrar el testimonio anterior
  function anteriorTestimonio() {
    currentIndex = currentIndex === 0 ? testimoniosData.length - 1 : currentIndex - 1;  // Decrementa el índice de manera circular
    renderTestimonios();  // Vuelve a renderizar los testimonios
  }

  // Función para actualizar los puntos de navegación de los testimonios (paginación)
  function actualizarPuntos() {
    const puntosDiv = document.getElementById("testimonio-puntos");
    puntosDiv.innerHTML = "";  // Limpia los puntos anteriores

    // Crea puntos según la cantidad de testimonios
    testimoniosData.forEach((_, index) => {
      const punto = document.createElement("div");
      punto.classList.add("punto");  // Clase para los puntos de navegación
      
      // Añade la clase 'activo' al punto correspondiente al testimonio actual
      if (index === currentIndex) {
        punto.classList.add("activo");
      }
      puntosDiv.appendChild(punto);  // Añade el punto al contenedor
    });
  }

  // Crea el contenedor de testimonios y lo agrega al cuerpo de la página
  const testimonios = document.createElement("div");
  testimonios.className = "testimonios";  // Añade la clase 'testimonios'
  testimonios.id = "testimonios";  // Asigna un id al contenedor
  testimonios.innerHTML = `

    <!-- Contenido HTML de la sección de testimonios -->
    <h1 class="mb-4 h1-testimonio">Testimonios</h1>
    <div class="container-fluid">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-md-4">
          <img id="testimonio-imagen" alt="Cliente" class="img-fluid" />
        </div>
        <div class="testimonios-container col-md-6 text-left">
          <div id="estrellas" class="stars mb-2"></div>
          <br/><br/>
          <p id="testimonio-texto" class="testimonios-text mb-2"></p>
          <br/><br/><br/>
          <p id="testimonio-nombre" class="testimonios-name"></p>
          <p>Usuario Poli Gym</p> <!-- Texto de debajo del nombre del usuario -->
          <div class="pagination-controls">
            <button id="anterior-btn">&lt;</button> <!-- Botón para testimonio anterior -->
            <div id="testimonio-puntos" class="testimonio-puntos"></div> <!-- Paginación -->
            <button id="siguiente-btn">&gt;</button> <!-- Botón para siguiente testimonio -->
          </div>
        </div>
      </div>

      <!-- Sección del pie de página de los testimonios -->
      <div class="footer-testimonio text-center mt-4">
        <h2 class="titulo-testimonio">¡Únete a Nuestro Viaje Fit!</h2>
        <p class="lead mt-5 mb-7">Libera tu potencial con formación personalizada y entrenamientos de última generación. ¡Contáctenos hoy <br/>para comenzar su transformación!</p>
        <button class="btn-testimonio btn btn-primary btn-lg mt-4">Prueba de 7 días</button> <!-- Botón de CTA -->
      </div>
    </div>
  `;

  // Añade el contenedor de testimonios antes de otros elementos en el cuerpo del documento
  document.body.prepend(testimonios);

  // Añade event listeners para los botones de "Anterior" y "Siguiente"
  document.getElementById("siguiente-btn").addEventListener("click", siguienteTestimonio);
  document.getElementById("anterior-btn").addEventListener("click", anteriorTestimonio);

  // Llama a la función para renderizar el primer testimonio al cargar la página
  renderTestimonios();
});
