document.addEventListener("DOMContentLoaded", function() {

    // Crear el componente de testimonios
    const testimonials = document.createElement("section");
    testimonials.classList.add("testimonios", "py-0", "bg-light", "text-center");
    testimonials.id = "testimonios";

    testimonials.innerHTML = `
        <h2 class="mb-4 mt-5">Testimonios de Clientes</h2>
        <div class="container">
            <div class="row" id="testimonios-list"> 
                <!-- Testimonios agregados se mostrarán aquí -->
            </div>
            <h3 class="mt-5">Deja tu Testimonio</h3>
            <form id="testimonio-form" class="form-testimonio mt-3">
                <div class="form-group">
                    <label for="nombre" class="sr-only">Nombre:</label>
                    <input type="text" id="nombre" name="nombre" class="form-control mb-3" placeholder="Tu nombre" required>
                </div>
                
                <div class="form-group">
                    <label for="testimonio" class="sr-only">Tu Testimonio:</label>
                    <textarea id="testimonio" name="testimonio" class="form-control mb-3" rows="3" placeholder="Escribe tu testimonio aquí" required></textarea>
                </div>
                
                <button type="submit" class="btn btn-success btn-lg mb-5">Enviar Testimonio</button>
            </form>
        </div>
    `;

    const main = document.querySelector("main");
    document.body.prepend(testimonials);

    const form = document.getElementById('testimonio-form');

    // Cargar testimonios guardados de localStorage al cargar la página
    loadTestimonios();

    // Escuchar el envío del formulario para agregar un nuevo testimonio
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value;
        const testimonio = document.getElementById('testimonio').value;

        addTestimonio(nombre, testimonio);

        // Guardar en localStorage
        saveTestimonio(nombre, testimonio);

        // Limpiar el formulario
        form.reset();
    });

    function addTestimonio(nombre, testimonio) {
        const testimonialsList = document.getElementById('testimonios-list');
        
        const newTestimonio = document.createElement('div');
        newTestimonio.classList.add('col-md-4');
        newTestimonio.innerHTML = `
            <blockquote class="blockquote p-4 border rounded shadow-sm">
                <p class="mb-0">"${testimonio}"</p>
                <footer class="blockquote-footer">${nombre}</footer>
                <button class="btn btn-dark btn-sm mt-3 delete-btn">Eliminar</button>
            </blockquote>
        `;
        
        // Añadir la función de eliminar testimonio
        newTestimonio.querySelector('.delete-btn').addEventListener('click', function() {
            deleteTestimonio(newTestimonio, nombre, testimonio);
        });

        testimonialsList.appendChild(newTestimonio);
    }

    function saveTestimonio(nombre, testimonio) {
        let testimonios = JSON.parse(localStorage.getItem('testimonios')) || [];
        testimonios.push({ nombre, testimonio });
        localStorage.setItem('testimonios', JSON.stringify(testimonios));
    }

    function loadTestimonios() {
        const testimonios = JSON.parse(localStorage.getItem('testimonios')) || [];
        testimonios.forEach(t => {
            addTestimonio(t.nombre, t.testimonio);
        });
    }

    function deleteTestimonio(element, nombre, testimonio) {
        // Eliminar el elemento del DOM
        element.remove();

        // Eliminar de localStorage
        let testimonios = JSON.parse(localStorage.getItem('testimonios')) || [];
        testimonios = testimonios.filter(t => t.nombre !== nombre || t.testimonio !== testimonio);
        localStorage.setItem('testimonios', JSON.stringify(testimonios));
    }
});
