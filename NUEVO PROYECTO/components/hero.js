document.addEventListener("DOMContentLoaded", function () {
  // Sección Hero (Imagen y título principal)
  const heroSection = document.createElement("section");
  heroSection.className = "hero";
  heroSection.id = "heroSection";
  heroSection.innerHTML = `    
    <div class="hero-content">
      <br/><br/>
      <h2 class="title">POLI GYM</h2>
      <p class=" parrafoLogo" " >Libera tu potencial físico</p>
      <br/>
<a href="./registrousuarios.html" class="btn btn-info btn-sm">Registrate</a>
    </div>
  `;

  // Sección de Servicios (Íconos y textos)
  const servicesSection = document.createElement("section");
  servicesSection.className = "services-section";
  servicesSection.id = "servicesSection";
  servicesSection.innerHTML = `    
    <div class="container services-content">
      <div class="row">
        <div class="col-md-4">
          <div class="service">
            <i class="fas fa-dumbbell fa-5x"></i>
            <h3>Entrenamiento Personalizado</h3>
          </div>
        </div>
        <div class="col-md-4">
          <div class="service">
            <i class="fas fa-users fa-5x"></i>
            <h3>Clases de Zumba Grupales</h3>
          </div>
        </div>
        <div class="col-md-4">
          <div class="service">
            <i class="fas fa-apple-alt fa-5x"></i>
            <br/>
            <h3>Plan de Alimentación</h3>
          </div>
        </div>
      </div>
    </div>
  `;

  // Insertar las secciones en el documento
  const main = document.querySelector('main');
  document.body.prepend(servicesSection); // Insertar la sección de servicios debajo
  document.body.prepend(heroSection); // Insertar la sección Hero primero
});
