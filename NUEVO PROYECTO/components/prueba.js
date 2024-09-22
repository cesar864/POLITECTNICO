document.addEventListener("DOMContentLoaded", function () {
    const testimoniosData = [
        {
            nombre: "Juan Pérez",
            texto: "Este servicio ha cambiado mi vida. ¡Los resultados son increíbles!",
            estrellas: 5,
            imagen: "../images/testimonio1.jpeg",
        },
        {
            nombre: "Ana López",
            texto: "Muy recomendable, gran atención al cliente y resultados.",
            estrellas: 4,
            imagen: "../images/testimonio2.jpeg",
        },
    ];

    let currentIndex = 0;

    function renderTestimonios() {
        const testimonio = testimoniosData[currentIndex];
        document.getElementById('testimonio-imagen').src = testimonio.imagen;
        document.getElementById('testimonio-texto').textContent = testimonio.texto;
        document.getElementById('testimonio-nombre').textContent = `- ${testimonio.nombre}`;

        
        // Renderizar estrellas
        const estrellasDiv = document.getElementById('estrellas');
        estrellasDiv.innerHTML = '';
        for (let i = 0; i < testimonio.estrellas; i++) {
            const estrella = document.createElement('span');
            estrella.classList.add('text-warning');
            estrella.textContent = '★';
            estrellasDiv.appendChild(estrella);
        }
    }

    function siguienteTestimonio() {
        currentIndex = (currentIndex + 1) % testimoniosData.length;
        renderTestimonios();
    }

    function anteriorTestimonio() {
        currentIndex = currentIndex === 0 ? testimoniosData.length - 1 : currentIndex - 1;
        renderTestimonios();
    }

    const testimonios = document.createElement("section");
    testimonios.id = "testimonios";
    testimonios.className = "testimonios-section text-center py-5 bg-light";
    testimonios.innerHTML = `
        <h2 class="mb-4">Testimonios</h2>
        <div class="container">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-md-4">
                    <img id="testimonio-imagen" alt="Cliente" class="img-fluid" />
                </div>
                <div class="col-md-6 text-left">
                    <div id="estrellas" class="stars mb-2"></div>
                    <p id="testimonio-texto" class="testimonial-text mb-2"></p>
                    <p id="testimonio-nombre" class="testimonial-name"></p>
                    <div class="pagination-controls mt-3">
                        <button class="btn btn-outline-secondary mr-2" id="anterior-btn">&larr;</button>
                        <button class="btn btn-outline-secondary" id="siguiente-btn">&rarr;</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.appendChild(testimonios);

    document.getElementById('anterior-btn').addEventListener('click', anteriorTestimonio);
    document.getElementById('siguiente-btn').addEventListener('click', siguienteTestimonio);
    renderTestimonios();
});