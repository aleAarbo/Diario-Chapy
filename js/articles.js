// Funcionalidad para artículos dinámicos
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('article-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close');
    const readMoreBtns = document.querySelectorAll('.read-more');
    
    // Datos de ejemplo para los artículos completos
    const articlesData = {
    1: {
        title: "Bicentenario de Uruguay: La compleja forja de una nación",
        image: "declaratorioa de la independencia.png",
        content: `<p>A 200 años de la Declaratoria de la Florida, un repaso por los intrincados orígenes de un país que nació más por intereses geopolíticos foráneos que por una voluntad unánime de independencia. 
        
Por Profiler. Manuel Albisu 

Montevideo, 26 de agosto de 2025. – Ayer, con los ecos de los festejos del bicentenario aún en el aire, Uruguay cerró un capítulo de celebración y abrió uno de reflexión. Dos siglos de vida independiente son, sin duda, un hito para una sociedad joven, un punto de inflexión para consolidar el presente y proyectar el futuro. Sin embargo, la mirada hacia el ayer nos revela una historia de gestación compleja, donde los hilos del destino nacional no siempre se tejieron desde dentro, sino que fueron manipulados por las potencias de la época.

La efeméride que celebramos cada 25 de agosto conmemora la Declaratoria de la Independencia por parte de los representantes de la Florida en 1825. Pero, ¿fue ese el verdadero momento fundacional del Estado uruguayo? Un análisis desapasionado de los hechos sugiere que la respuesta es más enrevesada que un simple sí.

Un Estado tapón con sello británico

Contrario al relato romántico de una lucha unánime por la libertad, el nacimiento de Uruguay tuvo un marcado carácter artificial. Como bien señalan los historiadores, surgimos "un poco de prepo" de la mano del interés estratégico de Gran Bretaña. La potencia marítima de entonces no veía con buenos ojos el conflicto constante entre el Imperio del Brasil y las Provincias Unidas del Río de la Plata, una pugna que perturbaba el libre comercio, vital para los intereses europeos.

La solución fue la creación de un "Estado tapón", una entidad política independiente que pusiera fin a las ambiciones territoriales de ambos gigantes. Así, la Banda Oriental, que durante un tiempo había sido incorporada forzosamente al Imperio del Brasil como la Provincia Cisplatina, se convirtió en la moneda de cambio para la paz.

La Florida: ¿Independencia o unión?

El episodio de la Florida es un fiel reflejo de esta dualidad. El 25 de agosto de 1825, las leyes promulgadas allí fueron un verdadero acertijo político. Por un lado, se creó un símbolo patrio (el pabellón) y se declaró la independencia… pero no de Brasil, sino de "todo poder extranjero". Inmediatamente después, una segunda ley proclamaba la unión de la provincia a las demás Provincias Unidas del Río de la Plata.

"Para entender este entuerto hay que recordar que, hasta bien entrado el siglo XIX, la mentalidad del oriental promedio no anhelaba una patria separada", explica un historiador consultado para este artículo. "La idea federal de Artigas, de ser una provincia más dentro de una confederación argentina, había calado hondo. Nunca quisimos ser un país independiente, sino una parte de nuestro vecino".

El verdadero parto: La Convención Preliminar de Paz

Si el 25 de agosto fue el grito de autonomía, el parto real del Estado uruguayo como entidad jurídicamente reconocida ocurrió el 4 de octubre de 1828. Ese día, en Buenos Aires, Brasil y las Provincias Unidas canjearon las copias de la Convención Preliminar de Paz, un tratado que, aunque "ominoso y degradante" por ser pactado sin la presencia de delegados orientales, dio existencia legal a la República Oriental del Uruguay.

Fuimos, en esencia, una "marca" fronteriza, un territorio de contención como los que existían en la Edad Media. Esa condición geopolítica fue la que, a la larga, nos condenó a la separación de nuestros hermanos. A partir de entonces, comenzó la titánica tarea de construir no solo un país, sino una idea de nación, forjando mitos y símbolos para dar cohesión a una sociedad que no había buscado deliberadamente su propio camino.

Mirar el pasado para entender el presente

Celebrar el bicentenario es, por lo tanto, mucho más que conmemorar una fecha. Es reconocer nuestra intrincada y poco convencional cuna. Es entender que la nacionalidad no es un destino manifiesto, sino un proceso histórico lleno de aciertos, errores, imposiciones externas y voluntades internas que se entrelazan.

La verdad histórica, a veces incómoda, es la que nos permite afianzarnos con mayor solidez. Al cumplir 200 años, Uruguay no solo mira con orgullo su trayectoria, sino que también se reconcilia con la complejidad de sus orígenes, asumiendo que la fortaleza de una nación joven reside en su capacidad para entender su pasado con claridad y valentía.</p>`
        },
    };
        2: {
            title: "Título Completo del Artículo 2",
            image: "articulo2.jpg",
            content: "<p>Contenido completo del segundo artículo. Aquí puedes incluir todo el texto, imágenes y otros elementos que quieras mostrar cuando el usuario haga clic en 'Leer más'.</p><p>Puedes agregar tantos párrafos como necesites para mostrar toda la información.</p>"
        },
        3: {
            title: "Título Completo del Artículo 3",
            image: "articulo3.jpg",
            content: "<p>Contenido completo del tercer artículo. Aquí puedes incluir todo el texto, imágenes y otros elementos que quieras mostrar cuando el usuario haga clic en 'Leer más'.</p><p>Puedes agregar tantos párrafos como necesites para mostrar toda la información.</p>"
        },
        4: {
            title: "Título Completo del Artículo 4",
            image: "articulo4.jpg",
            content: "<p>Contenido completo del cuarto artículo. Aquí puedes incluir todo el texto, imágenes y otros elementos que quieras mostrar cuando el usuario haga clic en 'Leer más'.</p><p>Puedes agregar tantos párrafos como necesites para mostrar toda la información.</p>"
        }
    };
    
    // Función para abrir el modal con el artículo completo
    function openArticleModal(articleId) {
        const article = articlesData[articleId];
        if (article) {
            modalBody.innerHTML = `
                <h2>${article.title}</h2>
                <img src="${article.image}" alt="${article.title}" style="width:100%; max-height:400px; object-fit:cover; margin:15px 0;">
                ${article.content}
            `;
            modal.style.display = 'block';
        }
    }
    
    // Event listeners para botones "Leer más"
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const articleId = this.closest('.dynamic-article').getAttribute('data-id');
            openArticleModal(articleId);
        });
    });
    
    // Cerrar modal al hacer clic en la X
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});