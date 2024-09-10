document.addEventListener("DOMContentLoaded", function () {
  const header = document.createElement("header");
  header.className = "header";
  header.innerHTML = `
    <div class="header-content">
      <div class="d-flex w-100 align-items-right">
        <!-- Logo -->
        <a href="../components/home.html" class="navbar-brand">
<i class="fa fa-dumbbell fa-2x iconoPrincipal"></i>
        </a>
        <h2 class="subtitle mt-3">POLI GYM</h2>

        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-dark ml-auto">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="../components/home.html">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../components/home.html#testimonios">Testimonios</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../components/home.html#heroSection">Servicios</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="../components/contacto.html">Contactanos</a>
              </li>
              <li class="nav-item ml-5">
                <a class="btn btn-info btn-sm px-5 py-1 nav-link" type="button" href="../components/login.html">Prueba gratis</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  `;

  document.body.prepend(header);
});
