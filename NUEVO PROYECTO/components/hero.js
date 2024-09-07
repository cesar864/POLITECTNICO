// hero.js
document.addEventListener("DOMContentLoaded", function () {
  const heroSection = document.createElement("section");
  heroSection.className = "hero";
  heroSection.id="divs-content"
    heroSection.id = "heroSection";
  heroSection.innerHTML = `    
  <div class= "divs-content " >
    <br/><br/>
    <h2 class="title">GYM POLITÉCNICO GRANCOLOMBIANO</h2>
    <br/>
    <div class="container div01">
      <div class="row">
        <div class="col-md-4">
          <div class="service">
              <i class="fas fa-dumbbell fa-5x"></i> <!-- Icono de entrenamiento personalizado -->
          <br/>            <br/>

            <h3>Entrenamiento Personalizado</h3>
            <p>Tenemos profesores altamente capacitados con magister en educación física.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="service">
              <i class="fas fa-users fa-5x"></i> <!-- Icono de clases grupales -->                        <br/>
            <br/>

            <h3>Clases de Zumba Grupales</h3>
            <p>Nuestras clases de zumba están disponibles de 0700R a 0800R - 1700R a 1800R.</p>
          </div>
        </div>
        <div class="col-md-4">
          <div class="service">
              <i class="fas fa-apple-alt fa-5x"></i> <!-- Icono de nutrición -->
                          <br/><br/>
            <h3>Plan de Alimentación</h3>
            <p>Te ofrecemos un plan de alimentación para bajar de peso y/o ganar masa muscular.</p>
          </div>
        </div>
      </div>
    </div>
     </div>
  `;
  const main = document.querySelector('main');
  document.body.prepend(heroSection);
});
