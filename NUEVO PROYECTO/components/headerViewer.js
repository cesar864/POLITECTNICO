document.addEventListener("DOMContentLoaded", function () {
  const header = document.createElement("header");
  header.className = "header";
  header.innerHTML = `
    <div class="header-content">
      <div class="d-flex ">
        <!-- Logo -->
        <a href="../components/home.html" class="navbar-brand">
          <img class="logo" src="https://images-platform.99static.com/8QVhsq0xUI9KAGH6WZXUmnWohwI=/0x0:1574x1574/500x500/top/smart/99designs-contests-attachments/97/97489/attachment_97489210" alt="Logo">
        </a>

        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-dark" >
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="../components/home.html"#divs-content>Inicio</a>
              </li>
               <li class="nav-item">
<a class="nav-link" href="../components/home.html#testimonios">Testimonios</a>
</li>
          <li class="nav-item">
        <a class="nav-link" href="../components/home.html#heroSection">Acerca De</a>
          </li>
    
              <li class="nav-item">
                <a class="nav-link" href="../components/contacto.html">Contacto</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  `;
  document.body.prepend(header);
});
