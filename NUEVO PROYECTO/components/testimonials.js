document.addEventListener("DOMContentLoaded", function(){ 

    const testimonials = document.createElement("testimonials");
    testimonials.classList.add("testimonios", "py-0", "bg-light", "text-center");
    testimonials.id="testimonios"
    
    testimonials.innerHTML = `
    
  <h2 class="mb-4 ">Testimonios de Clientes</h2>
    
    <div class="container" >
        <div class="row"> 
            <div class="col-md-4">
                <blockquote class="blockquote p-4 border rounded shadow-sm">
                    <p class="mb-0">"Este servicio cambió mi vida. ¡Altamente recomendado!"</p>
                    <footer class="blockquote-footer">Alexander Bernal</footer>
                </blockquote>
            </div>
            <div class="col-md-4">
                <blockquote class="blockquote p-4 border rounded shadow-sm">
                    <p class="mb-0">"Una experiencia increíble. El equipo es muy profesional y atento."</p>
                    <footer class="blockquote-footer">Michael Motivar</footer>
                </blockquote>
            </div>
            <div class="col-md-4">
                <blockquote class="blockquote p-4 border rounded shadow-sm">
                    <p class="mb-0">"Los resultados fueron inmediatos y superaron mis expectativas."</p>
                    <footer class="blockquote-footer">Carlos salamanca</footer>
                </blockquote>
            </div>
        </div>

        <h3 class="mt-5">Deja tu Testimonio</h3>
        <form action="#" method="post" class="form-testimonio mt-3">
            <div class="form-group">
                <label for="nombre" class="sr-only">Nombre:</label>
                <input type="text" id="nombre" name="nombre" class="form-control mb-3" placeholder="Tu nombre" required>
            </div>
            
            <div class="form-group">
                <label for="testimonio" class="sr-only">Tu Testimonio:</label>
                <textarea id="testimonio" name="testimonio" class="form-control mb-3" rows="3" placeholder="Escribe tu testimonio aquí" required></textarea>
            </div>
            
            <button type="submit" class="btn btn-primary btn-lg">Enviar Testimonio</button>
        </form>
    </div>
  `;
    
    const main = document.querySelector("main");
    document.body.prepend(testimonials);

});