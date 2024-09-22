document.addEventListener("DOMContentLoaded", function () {
    const header = document.createElement("header");
    header.className = "header";
    header.innerHTML = `
                    <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand d-flex align-items-center" href="../components/home.html">
                    <span class="material-symbols-outlined iconoPrincipal">
                        fitness_center
                    </span>
                    <h2 class="subtitle mb-0 ms-2">POLI GYM</h2>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="../components/home.html">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../components/home.html#testimonios">Testimonios</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../components/home.html#servicios">Servicios</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="../components/contacto.html">Contáctanos</a>
                        </li>
                        <li class="nav-item ms-lg-3 mt-2 mt-lg-0">
                            <a class="btn btn-info btn-sm px-4 py-2" href="../components/login.html">Prueba gratis</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    `;
    document.body.prepend(header);
});