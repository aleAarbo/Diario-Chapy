// unidades.js
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('article-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close');
    const readMoreBtns = document.querySelectorAll('.read-more');

    // Datos de todos los artículos
    const articlesData = {
        1: {
            title: "Inglés 9° EBI - Language in Context",
            image: ".unidades/Inglés - Braulio Paz/9°/Material 1.png",
            content: `
                <h4>Language in context! by 9th grade students</h4>
                <p>La nueva información cobra aún más sentido y significado cuando podemos, finalmente, observarla en contexto. Esto se intensifica aún más cuando podemos utilizarla en contexto.</p>
                <p>Durante el módulo introductorio, los estudiantes de 9° aprendieron (y recordaron de años anteriores) frases de cortesía y frases útiles para el día a día. Dichas frases fueron aplicadas en diferentes diálogos.</p>
                
                <div class="simple-carousel">
                    <img src="./unidades/Inglés - Braulio Paz/9°/Material 1.png" alt="Material 1" class="carousel-img active">
                    <img src="./unidades/Inglés - Braulio Paz/9°/Material 2.png" alt="Material 2" class="carousel-img">
                    <img src="./unidades/Inglés - Braulio Paz/9°/Material 3.png" alt="Material 3" class="carousel-img">
                    <img src="./unidades/Inglés - Braulio Paz/9°/Material 4.png" alt="Material 4" class="carousel-img">
                    <div class="carousel-controls">
                        <button onclick="prevSlide(this)">Anterior</button>
                        <button onclick="nextSlide(this)">Siguiente</button>
                    </div>
                </div>
                
                <p><small>Prof. Braulio Paz</small></p>
            `
        },

        2: {
            title: "Química 2° CT - Seguridad en Laboratorio",
            image: "./química/Infografías sobre trabajo en el laboratorio/Screenshot_20250327_204313.jpg",
            content: `
                <h4>Independencia, colaboración y seguridad: estudiantes de Química diseñan infografías para reflexionar sobre el trabajo en el laboratorio</h4>
                <p>Como parte del cierre del M.I, desde la U.C Química, estudiantes de 2°CT crearon y presentaron infografías educativas centradas en la seguridad en el laboratorio de ciencias. La independencia fue el eje transversal del módulo para EMS; entendida no sólo como la capacidad de actuar con autonomía, sino también como la responsabilidad personal dentro de un entorno colaborativo.</p>
                <p>A partir de este enfoque, los estudiantes reflexionaron sobre cómo la independencia no implica trabajar en soledad, sino asumir un rol activo y consciente dentro del grupo. Así, el laboratorio de ciencias se convirtió en el escenario ideal para poner en práctica estos conceptos: organizar tareas, tomar decisiones compartidas, comunicar ideas con claridad y, sobre todo, respetar los protocolos que garantizan un entorno de trabajo seguro y eficaz.</p>
                
                <div class="simple-carousel">
                    <iframe src="./unidades/química/Infografías sobre trabajo en el laboratorio/2+EMS.pdf" class="carousel-img active" style="height: 500px;"></iframe>
                    <iframe src="./unidades/química/Infografías sobre trabajo en el laboratorio/Fondos+para+Whatsapp+Minimalista+Beige.png" alt="Infografía 2" class="carousel-img"></iframe>
                    <iframe src="./unidades/química/Infografías sobre trabajo en el laboratorio/Infografía+Proyecto+de+Química+moderno+negro+beige_20250326_173958_0000.pdf" class="carousel-img" style="height: 500px;"></iframe>
                    <iframe src="./unidades/química/Infografías sobre trabajo en el laboratorio/Screenshot_20250327_204313.jpg" alt="Infografía 4" class="carousel-img"></iframe>
                    <div class="carousel-controls">
                        <button onclick="prevSlide(this)">Anterior</button>
                        <button onclick="nextSlide(this)">Siguiente</button>
                    </div>
                </div>
                
                <p><small>Prof. Dayana Acosta</small></p>
            `
        },

        3: {
            title: "Arte y Comunicación Visual - Concept Art Frankenstein",
            image: "./Arte y comunicación visual/1ems/20250424_115914.jpg",
            content: `
                <h4>Concept Art Frankenstein - Imaginamos y creamos un concepto visual de Frankenstein</h4>
                <p>Proyecto realizado entre unidades curriculares arte y comunicación visual y literatura.</p>
                <p><strong>Actividad:</strong> A partir de la visualización del personaje y su estudio a través de la novela donde reconocen rasgos físicos y emocionales los alumnos realizarán ilustraciones donde se expresen dichas características. Se realizará un estudio de la anatomía humana sobre todo la realización de rostros además de agregar aspectos visuales que potencian el significado.</p>
                
                <div class="simple-carousel">
                    <img src="./unidades/Arte y comunicación visual/1ems/20250424_115914.jpg" alt="Ilustración 1" class="carousel-img active">
                    <img src="./unidades/Arte y comunicación visual/1ems/20250424_115921.jpg" alt="Ilustración 2" class="carousel-img">
                    <img src="./unidades/Arte y comunicación visual/1ems/20250424_115929.jpg" alt="Ilustración 3" class="carousel-img">
                    <img src="./unidades/Arte y comunicación visual/1ems/20250424_115936.jpg" alt="Ilustración 4" class="carousel-img">
                    <img src="./unidades/Arte y comunicación visual/1ems/20250424_115942.jpg" alt="Ilustración 5" class="carousel-img">
                    <img src="./unidades/Arte y comunicación visual/1ems/20250424_115948.jpg" alt="Ilustración 6" class="carousel-img">
                    <img src="./unidades/Arte y comunicación visual/1ems/20250424_115955.jpg" alt="Ilustración 7" class="carousel-img">
                    <img src="./unidades/Arte y comunicación visual/1ems/20250424_120000.jpg" alt="Ilustración 8" class="carousel-img">
                    <img src="./unidades/Arte y comunicación visual/1ems/20250424_120006.jpg" alt="Ilustración 9" class="carousel-img">
                    <div class="carousel-controls">
                        <button onclick="prevSlide(this)">Anterior</button>
                        <button onclick="nextSlide(this)">Siguiente</button>
                    </div>
                </div>
                
                <p><small>Prof. Walter Nuñez</small></p>
            `
        },

        4: {
            title: "Filosofía - Educación Media Superior",
            image: "./unidades/filosofia/logo.jfif",
            content: `
                <h4>Trabajos Filosóficos - Análisis y Reflexión</h4>
                <p>Exploración de conceptos filosóficos fundamentales a través del análisis de textos y películas.</p>
                
                <div class="simple-carousel">
                    <iframe src="./unidades/filosofia/Los ciegos y el elefante - Filosofía 2do EMS.pdf" class="carousel-img active" style="height: 500px;"></iframe>
                    <iframe src="./unidades/filosofia/Reseña de película, 3ro G Filosofía.pdf" class="carousel-img"></iframe>
                    <div class="carousel-controls">
                        <button onclick="prevSlide(this)">Anterior</button>
                        <button onclick="nextSlide(this)">Siguiente</button>
                    </div>
                </div>

                <p class="text-center mt-1"><small>3ro EMS - Prof. Robaudo Falcon</small></p>
            `
        },

        5: {
            title: "Matemática - Varios Niveles",
            image: "./unidades/matemática logo.jfif",
            content: `
                <h4>Recursos y Presentaciones Interactivas</h4>
                <p>Material educativo interactivo para diferentes niveles de enseñanza matemática.</p>
                
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <div class="ratio ratio-16x9">
                            <iframe src="https://www.canva.com/design/DAGiFczkq2o/Udgu5IaFjCNjfXRpi22QBg/view?embed" allowfullscreen></iframe>
                        </div>
                        <p class="text-center mt-1"><small>Prof. Maria Imer</small></p>
                    </div>
                    <div class="col-md-6 mb-3">
                        <div class="ratio ratio-16x9">
                            <iframe src="https://view.genially.com/67e2b8cbe4e040afcc272430/interactive-content-2degreeems-modulo-de-inicio-chapicuy" allowfullscreen></iframe>
                        </div>
                        <p class="text-center mt-1"><small>Prof. Maria Imer</small></p>
                    </div>
                </div>
                
                <div class="row mt-4">
                    <div class="col-md-6 mb-3">
                        <div class="ratio ratio-16x9">
                            <iframe src="https://www.canva.com/design/DAGh_zYLU3o/W1wxjKvwrEUYw_AcDMbR1Q/view?embed" allowfullscreen></iframe>
                        </div>
                        <p class="text-center mt-1"><small>Prof. Giovanni Acuña</small></p>
                    </div>
                    <div class="col-md-6 mb-3">
                        <div class="ratio ratio-16x9">
                            <iframe src="https://view.genially.com/67d3286418df4c2f9dc9cafe/interactive-content-cooperativismo-ebi" allowfullscreen></iframe>
                        </div>
                        <p class="text-center mt-1"><small>Prof. Giovanni Acuña</small></p>
                    </div>
                </div>
            `
        },

        6: {
            title: "Taller de Cocina",
            image: "./unidades/Taller de cocina/20250425_142426.jpg",
            content: `
                <h4>Actividades Prácticas del Taller</h4>
                <p>Galería de actividades prácticas realizadas en el taller de cocina.</p>
                
                <div class="simple-carousel">
                    <img src="./unidades/Taller de cocina/20250425_142426.jpg" alt="Cocina 1" class="carousel-img active">
                    <img src="./unidades/Taller de cocina/20250425_142433.jpg" alt="Cocina 2" class="carousel-img">
                    <img src="./unidades/Taller de cocina/20250425_151002.jpg" alt="Cocina 3" class="carousel-img">
                    <img src="./unidades/Taller de cocina/20250425_151008.jpg" alt="Cocina 4" class="carousel-img">
                    <video class="carousel-img" controls>
                        <source src="./unidades/Taller de cocina/20250425_140831.mp4" type="video/mp4">
                    </video>
                    <div class="carousel-controls">
                        <button onclick="prevSlide(this)">Anterior</button>
                        <button onclick="nextSlide(this)">Siguiente</button>
                    </div>
                </div>
                
                <p><small>Prof. Taller de Cocina</small></p>
            `
        },

        7: {
            title: "Biología - Todos los Niveles",
            image: "./unidades/biología/1° EMS/Facundo y Benjamin.png",
            content: `
                <h4>Proyectos de Biología - Infografías y Presentaciones</h4>
                <p>Trabajos realizados por estudiantes de diferentes niveles en la unidad curricular de Biología.</p>
                
                <h5>8° y 9° EBI</h5>
                <div class="simple-carousel">
                    <iframe src="./unidades/biología/Presentación educativa el arte del collage estilo collage fotográfico en beige y marrón.pdf" class="carousel-img active" style="height: 500px;"></iframe>
                    <video class="carousel-img" controls>
                        <source src="./unidades/biología/9° Bullyng.mp4" type="video/mp4">
                    </video>
                    <div class="carousel-controls">
                        <button onclick="prevSlide(this)">Anterior</button>
                        <button onclick="nextSlide(this)">Siguiente</button>
                    </div>
                </div>

                <h5 class="mt-4">1° EMS</h5>
                <div class="simple-carousel">
                    <iframe src="./unidades/biología/1° EMS/Agregar un título.pdf" class="carousel-img active" style="height: 500px;"></iframe>
                    <img src="./unidades/biología/1° EMS/Facundo y Benjamin.png" alt="Bio 1EMS 1" class="carousel-img">
                    <iframe src="./unidades/biología/1° EMS/Infografía Biología molecular Ciencia Información Sencilla Gris y Verde.pdf" class="carousel-img" style="height: 500px;"></iframe>
                    <img src="./unidades/biología/1° EMS/Matias, David, Lucas.png" alt="Bio 1EMS 2" class="carousel-img">
                    <iframe src="./unidades/biología/1° EMS/Rosina y Valentina.pdf" class="carousel-img" style="height: 500px;"></iframe>
                    <img src="./unidades/biología/1° EMS/Santino y Lautaro.png" alt="Bio 1EMS 3" class="carousel-img">
                    <div class="carousel-controls">
                        <button onclick="prevSlide(this)">Anterior</button>
                        <button onclick="nextSlide(this)">Siguiente</button>
                    </div>
                </div>

                <h5 class="mt-4">2° EMS</h5>
                <div class="simple-carousel">
                    <video class="carousel-img active" controls>
                        <source src="./unidades/biología/2° EMS/AT WORK.mp4" type="video/mp4">
                    </video>
                    <iframe src="./unidades/biología/2° EMS/Kevin Rodríguez.pdf" class="carousel-img" style="height: 500px;"></iframe>
                    <img src="./unidades/biología/2° EMS/maira.jpeg" alt="Bio 2EMS 1" class="carousel-img">
                    <img src="./unidades/biología/2° EMS/nelly.jpeg" alt="Bio 2EMS 2" class="carousel-img">
                    <iframe src="./unidades/biología/2° EMS/Pia.pdf" class="carousel-img" style="height: 500px;"></iframe>
                    <iframe src="./unidades/biología/2° EMS/Visual y Biologia (Guada Antuj) .pdf" class="carousel-img" style="height: 500px;"></iframe>
                    <img src="./unidades/biología/2° EMS/WhatsApp Image 2025-04-08 at 08.53.48.jpeg" alt="Bio 2EMS 3" class="carousel-img">
                    <div class="carousel-controls">
                        <button onclick="prevSlide(this)">Anterior</button>
                        <button onclick="nextSlide(this)">Siguiente</button>
                    </div>
                </div>
                
                <p><small>Prof. Estela Martinez</small></p>
            `
        },

        8: {
            title: "Literatura - Creaciones Literarias",
            image: "./unidades/literatura/logo.jfif",
            content: `
                <h4>Trabajos Creativos de Estudiantes</h4>
                <p>Exploración de diferentes géneros y estilos literarios a través de creaciones originales.</p>
                
                <div class="simple-carousel">
                    <iframe src="./unidades/literatura/Titán Gio - Matías Rochón.pdf" class="carousel-img active" style="height: 500px;"></iframe>
                    <iframe src="./unidades/literatura/Tercero_Nada es lo.pdf" class="carousel-img"></iframe>
                    <iframe src="./unidades/literatura/Cuarto_Un amor.pdf" class="carousel-img"></iframe>
                    <iframe src="./unidades/literatura/Passepartout - Viernes Roquero.pdf" class="carousel-img"></iframe>
                    <div class="carousel-controls">
                        <button onclick="prevSlide(this)">Anterior</button>
                        <button onclick="nextSlide(this)">Siguiente</button>
                    </div>
                </div>
                
                <p><small>Prof. Carlos Tellechea</small></p>
            `
        },

        9: {
            title: "Taller Arte Educación Musical",
            image: "./Arte Educación Musical/Captura de pantalla.png",
            content: `
                <h4>Proyecto Integrado de Arte y Música</h4>
                <p>Proyectos creativos que integran arte visual y educación musical para estudiantes de 7° y 8° grado.</p>
                
                <div class="text-center">
                    <img src="./Arte Educación Musical/Captura de pantalla.png" alt="Arte Musical" style="max-width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                </div>
                
                <p><small>Prof. Ingrid Waller</small></p>
            `
        },

        10: {
            title: "Geografía 7° EBI",
            image: "./img/logo.png",
            content: `
                <h4>Video Educativo sobre Conceptos Geográficos</h4>
                <p>Video creado por estudiantes de 7° grado explorando conceptos fundamentales de geografía.</p>
                
                <div class="ratio ratio-16x9">
                    <video controls style="width: 100%; border-radius: 8px;">
                        <source src="./geografía/WhatsApp Video 2025-04-20 at 8.36.26 PM.mp4" type="video/mp4">
                    </video>
                </div>
                
                <p><small>Prof. Alejandra Pereira</small></p>
            `
        },

        11: {
            title: "Lengua y Química 8°-9°",
            image: "./Química y Español - 8vo y 9no/Gamificación en el aula .jpg",
            content: `
                <h4>Gamificación y Juegos Cooperativos</h4>
                <p>Actividades de aprendizaje integrado que combinan lengua española y ciencias a través de la gamificación.</p>
                
                <div class="simple-carousel">
                    <img src="./Química y Español - 8vo y 9no/Gamificación en el aula .jpg" alt="Gamificación" class="carousel-img active">
                    <img src="./Química y Español - 8vo y 9no/Juegos cooperativos.jpg" alt="Juegos Cooperativos" class="carousel-img">
                    <img src="./Química y Español - 8vo y 9no/Juego del paracaídas_.jpg" alt="Juego Paracaídas" class="carousel-img">
                    <img src="./Química y Español - 8vo y 9no/Jugando también aprendemos_.jpg" alt="Aprendiendo Jugando" class="carousel-img">
                    <div class="carousel-controls">
                        <button onclick="prevSlide(this)">Anterior</button>
                        <button onclick="nextSlide(this)">Siguiente</button>
                    </div>
                </div>
                
                <p><small>Prof. Macarena Flores y Prof. Ely Di Lachio</small></p>
            `
        }
    };

    // Funciones para abrir/cerrar modal
    function openArticleModal(articleId) {
        const article = articlesData[articleId];
        if (article) {
            modalBody.innerHTML = `
                <h2>${article.title}</h2>
                ${article.image ? `<img src="${article.image}" alt="${article.title}" style="width:100%; max-height:300px; object-fit:cover; margin:15px 0; border-radius:8px;">` : ''}
                ${article.content}
            `;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    // Event listeners para botones "Leer más"
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const articleId = this.closest('.dynamic-article').getAttribute('data-id');
            openArticleModal(articleId);
        });
    });

    // Cerrar modal
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

// Funciones para carrusel
function prevSlide(button) {
    const carousel = button.closest('.simple-carousel');
    const items = carousel.querySelectorAll('.carousel-img');
    let currentIndex = Array.from(items).findIndex(item => item.classList.contains('active'));

    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    items[currentIndex].classList.add('active');
}

function nextSlide(button) {
    const carousel = button.closest('.simple-carousel');
    const items = carousel.querySelectorAll('.carousel-img');
    let currentIndex = Array.from(items).findIndex(item => item.classList.contains('active'));

    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % items.length;
    items[currentIndex].classList.add('active');
}