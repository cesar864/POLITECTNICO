document.addEventListener("DOMContentLoaded", function () {
  const testimoniosData = [
    {
      nombre: "Maria Hernandez ",
      texto: "Unirse al Poli Gym ha sido transformador. Los entrenadores están bien informados y la comunidad es increíblemente comprensiva.",
      estrellas: 5,
      imagen: "../images/testimonio1.jpeg",
    },
    {
      nombre: "Alexander Bernal",
      texto: "Este servicio cambió mi vida. ¡Altamente recomendado!",
      estrellas: 5,
      imagen: "../images/testimonios2.jpeg",
    },
    {
      nombre: "Michael Motivar",
      texto: "Una experiencia increible. El equipo es muy profesional y atento.",
      estrellas: 5,
      imagen: "../images/testimonio3.jpeg",
    },
  ];

  let currentIndex = 0;

  function renderTestimonios() {
    const testimonio = testimoniosData[currentIndex];
    document.getElementById("testimonio-imagen").src = testimonio.imagen;
    document.getElementById("testimonio-texto").textContent = testimonio.texto;
    document.getElementById("testimonio-nombre").textContent = testimonio.nombre;

    const estrellasDiv = document.getElementById("estrellas");
    estrellasDiv.innerHTML = "";
    for (let i = 0; i < testimonio.estrellas; i++) {
      const estrella = document.createElement("span");
      estrella.classList.add("text-warning");
      estrella.textContent = "★";
      estrellasDiv.appendChild(estrella);
    }

    // Actualizar los puntos
    actualizarPuntos();
  }

  function siguienteTestimonio() {
    currentIndex = (currentIndex + 1) % testimoniosData.length;
    renderTestimonios();
  }

  function anteriorTestimonio() {
    currentIndex = currentIndex === 0 ? testimoniosData.length - 1 : currentIndex - 1;
    renderTestimonios();
  }

  function actualizarPuntos() {
    const puntosDiv = document.getElementById("testimonio-puntos");
    puntosDiv.innerHTML = "";
    testimoniosData.forEach((_, index) => {
      const punto = document.createElement("div");
      punto.classList.add("punto");
      if (index === currentIndex) {
        punto.classList.add("activo");
      }
      puntosDiv.appendChild(punto);
    });
  }

  const testimonios = document.createElement("div");
  testimonios.className = "testimonios";
  testimonios.id="testimonios"
  testimonios.innerHTML = `

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
          <p>Usuario Poli Gym</p> <!-- Aquí muevo el párrafo debajo del nombre -->
           <div class="pagination-controls">
        <button id="anterior-btn">&lt;</button>
        <div id="testimonio-puntos" class="testimonio-puntos"></div>
        <button id="siguiente-btn">&gt;</button>
      
      </div>
        </div>
      </div>
      <!-- Footer del testimonio -->
      <div class="footer-testimonio text-center mt-4">
        <h2 class=" titulo-testimonio   ">¡Únete a Nuestro Viaje Fit!</h2>
        <p class="lead mt-5 mb-7">Libera tu potencial con formación personalizada y entrenamientos de última generación. ¡Contáctenos hoy <br/>para comenzar su transformación!</p>
        <button class=" btn-testimonio btn btn-primary btn-lg mt-4 s">Prueba de 7 días</button>
      </div>
    </div>
     
    
  `;

  document.body.prepend(testimonios);
  document.getElementById("siguiente-btn").addEventListener("click", siguienteTestimonio);
  document.getElementById("anterior-btn").addEventListener("click", anteriorTestimonio);
  renderTestimonios();
});
