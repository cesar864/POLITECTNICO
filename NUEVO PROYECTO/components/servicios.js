document.addEventListener("DOMContentLoaded", function () {
  const services = document.createElement("section");
    services.className = "services";
    services.id = "servicios";
  services.innerHTML =   `
    <div class="container">
      <h1 class="text-center services-title"><strong>Nuestros Servicios</strong></h1>
      <p class="text-center services-description">En Poli Gym, ofrecemos una gama de servicios de acondicionamiento físico, <br/>diseñados para ayudarte a. alcanzar tus objetivos en salud y bienestar. Nuestros<br/> entrenadores expertos y nuestras clases grupales o personalidad están aquí <br/>para apoyarte en cada paso del camino</p>
      <div class="row">
        <div class="col-md-6 services-cont"  id="container-services">
          <h2 id="subtitulo-servicios"><b>Entrenamiento Personalizado</b></h2>
          <p id="parrafo-servicios" >Nuestros entrenadores personales certificados brindan<br/> planes de entrenamiento individualizados adaptados a tu <br/> nivel de condición física y objetivos, lo que garantiza que <br/> logres resultados óptimos.</p>
        </div>
        <div class="col-md-6 services-cont" >
          <img src="../images/profesores personalizados.jpg" alt="Entrenamiento Personalizado" class="service-image img-fluid">
        </div>
      </div>


       <div class="row mt-5">
        <div class="col-md-6 services-cont" >
          <img src="../images/zumba.jpg" alt="Entrenamiento Personalizado" class="service-image img-fluid">
        </div>
        <div class="col-md-6 services-cont"  id="container-services01">
          <h2 id="subtitulo-servicios"><b>Clases Grupales</b></h2>
          <p id="parrafo-servicios">Únete a nuestras clases grupales dinámicas que van <br/> desde yoga hasta entrenamiento en intervalos de alta <br/>  intensidad, diseñadas para mantenerte motivado y con <br/>  energía</p>
        </div>
      </div>

        <div class="row mt-5">
        <div class="col-md-6 services-cont"  id="container-services02">
          <h2 id="subtitulo-servicios"><b>Plan de Alimentacion</b></h2>
          <p id="parrafo-servicios">En nuestro gimnasio te ofrecemos planes de alimentación <br/> personalizados diseñados para adaptarse a tus <br/> necesidades y objetivos. Nuestros nutricionistas crean <br/> menús equilibrados y variados. Teniendo en cuenta tus<br/> preferencias alimentarias</p>
        </div>
        <div class="col-md-6 services-cont" >
          <img src="../images/nutrición.jpg" alt="Entrenamiento Personalizado" class="service-image img-fluid">


         <ul class="nav-links-service mt-4">
        <li class="nav-item">
          <a class="nav-link" href="#testimonios">Ver Testimonios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../components/contacto.html">Contáctenos</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="../components/home.html">Volver al Inicio</a>
        </li>
      </ul>
          </div>
        
 
  `;

  
  document.body.prepend(services);

});