// Espera a que el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {

  // Crea un nuevo elemento <section> para la sección de servicios
  const services = document.createElement("section");
  services.className = "services"; // Añade la clase 'services'
  services.id = "servicios"; // Asigna el ID 'servicios' para la sección

  // Define el contenido HTML de la sección de servicios usando `innerHTML`
 services.innerHTML = `
  <!-- Sección de Servicios -->
<section id="servicios" class="services">
  <div class="container">
    
    <!-- Título de la sección de servicios -->
    <h1 class="text-center services-title"><strong>Nuestros Servicios</strong></h1>
    
    <!-- Descripción de los servicios -->
    <p class="text-center services-description">
      En Poli Gym, ofrecemos una gama de servicios de acondicionamiento físico, <br/>
      diseñados para ayudarte a alcanzar tus objetivos en salud y bienestar. Nuestros<br/>
      entrenadores expertos y nuestras clases grupales o personalizadas están aquí <br/>
      para apoyarte en cada paso del camino.
    </p>
    
    <!-- Primera fila: Entrenamiento Personalizado -->
    <div class="row">
      <!-- Texto del servicio de Entrenamiento Personalizado -->
      <div class="col-md-6 services-cont" id="container-services">
        <h2 id="subtitulo-servicios"><b>Entrenamiento Personalizado</b></h2>
        <p id="parrafo-servicios">
          Nuestros entrenadores personales certificados brindan<br/>
          planes de entrenamiento individualizados adaptados a tu <br/>
          nivel de condición física y objetivos, lo que garantiza que <br/>
          logres resultados óptimos.
        </p>
      </div>
      <!-- Imagen del servicio de Entrenamiento Personalizado -->
      <div class="col-md-6 services-cont">
        <img src="../images/profesores personalizados.jpg" alt="Entrenamiento Personalizado" class="service-image img-fluid">
      </div>
    </div>

    <!-- Segunda fila: Clases Grupales -->
    <div class="row mt-5">
      <!-- Imagen de las clases grupales -->
      <div class="col-md-6 services-cont">
        <img src="../images/zumba.jpg" alt="Clases Grupales" class="service-image img-fluid">
      </div>
      <!-- Texto del servicio de Clases Grupales -->
      <div class="col-md-6 services-cont" id="container-services01">
        <h2 id="subtitulo-servicios"><b>Clases Grupales</b></h2>
        <p id="parrafo-servicios">
          Únete a nuestras clases grupales dinámicas que van <br/>
          desde yoga hasta entrenamiento en intervalos de alta <br/>
          intensidad, diseñadas para mantenerte motivado y con <br/>
          energía.
        </p>
      </div>
    </div>

    <!-- Tercera fila: Plan de Alimentación -->
    <div class="row mt-5">
      <!-- Texto del servicio de Plan de Alimentación -->
      <div class="col-md-6 services-cont" id="container-services02">
        <h2 id="subtitulo-servicios"><b>Plan de Alimentación</b></h2>
        <p id="parrafo-servicios">
          En nuestro gimnasio te ofrecemos planes de alimentación <br/>
          personalizados diseñados para adaptarse a tus <br/>
          necesidades y objetivos. Nuestros nutricionistas crean <br/>
          menús equilibrados y variados, teniendo en cuenta tus <br/>
          preferencias alimentarias.
        </p>
      </div>
      <!-- Imagen del servicio de Plan de Alimentación -->
      <div class="col-md-6 services-cont">
        <img src="../images/nutrición.jpg" alt="Plan de Alimentación" class="service-image img-fluid">

        <!-- Enlaces de navegación -->
        <ul class="nav-links-service mt-4">
          <li class="nav-item">
            <a class="nav-link" href="#testimonios">Ver Testimonios</a> <!-- Enlace para ver la sección de testimonios -->
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../components/contacto.html">Contáctenos</a> <!-- Enlace a la página de contacto -->
          </li>
          <li class="nav-item">
            <a class="nav-link" href="../components/home.html">Volver al Inicio</a> <!-- Enlace para volver a la página de inicio -->
          </li>
        </ul>
      </div>
    </div>
  </div>
  `;

  // Añade el elemento 'services' (la sección de servicios) al principio del body
  document.body.prepend(services);
});
