document.addEventListener("DOMContentLoaded", function () { 

    const footer = document.createElement("footer");
    footer.innerHTML = `
     <div class="footer-content">
      <h3>Información de Contacto</h3>
      <p>Teléfono: (321) 475-8426 - (320) 877-9684</p>
      <p>Email: gympolitecnico@poligram.com</p>
      <p>Dirección: Carrera 6 No 32-11, Bogotá D.C.</p>
      <div class="redes-sociales">
        <a href="https://facebook.com" class="social-link"><i class="fab fa-facebook"></i> Facebook @GymPoli</a>
        <a href="#" class="social-link"><i class="fab fa-twitter"></i> Twitter @Gym_Poli</a>
        <a href="#" class="social-link"><i class="fab fa-instagram"></i> Instagram @Poli_Gym</a>
        <a href="#" class="social-link"><i class="fab fa-whatsapp"></i> WhatsApp 3208779684</a>
      </div>
      <p>&copy; 2024 Gympolitecnico S.A.S. Todos los derechos reservados.</p>
    </div>
  `;
    

    document.body.prepend(footer);
    




});