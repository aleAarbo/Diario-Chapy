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
            image: "/img/declaratorioa de la independencia.png",
            content: `<h4>A 200 años de la Declaratoria de la Florida, un repaso por los intrincados orígenes de un país que nació más por intereses geopolíticos foráneos que por una voluntad unánime de independencia.</h4>
            
            <br>

            <p>Con los ecos de los festejos del bicentenario aún en el aire, <i>Uruguay cerró un capítulo de celebración y abrió uno de reflexión</i>. Dos siglos de vida independiente son, sin duda, un hito para una sociedad joven, un punto de inflexión para consolidar el presente y proyectar el futuro. Sin embargo, la mirada hacia el ayer nos revela una historia de gestación compleja, donde los hilos del destino nacional no siempre se tejieron desde dentro, sino que fueron manipulados por las potencias de la época.</p>

<br>

<p>La efeméride que celebramos cada 25 de agosto conmemora la Declaratoria de la Independencia por parte de los representantes de la Florida en 1825. Pero, <i>¿fue ese el verdadero momento fundacional del Estado uruguayo?</i> Un análisis desapasionado de los hechos sugiere que la respuesta es más enrevesada que un simple "sí".</p>

<br>

<strong>Un Estado "tapón" con sello británico</strong>

<br><br>

<p>Contrario al relato romántico de una lucha unánime por la libertad, <i>el nacimiento de Uruguay tuvo un marcado carácter artificial</i>. Como bien señalan los historiadores, surgimos "un poco de prepo" de la mano del interés estratégico de Gran Bretaña. La potencia marítima de entonces no veía con buenos ojos el conflicto constante entre el Imperio del Brasil y las Provincias Unidas del Río de la Plata, una pugna que perturbaba el libre comercio, vital para los intereses europeos.</p>

<br>

<p>La solución fue la creación de un <i>"Estado tapón"</i>, una entidad política independiente que pusiera fin a las ambiciones territoriales de ambos gigantes. Así, la Banda Oriental, que durante un tiempo había sido incorporada forzosamente al Imperio del Brasil como la Provincia Cisplatina, se convirtió en la moneda de cambio para la paz.</p>

<br>

<strong>La Florida: ¿Independencia o unión?</strong>

<br><br>

<p>El episodio de la Florida es un fiel reflejo de esta dualidad. El 25 de agosto de 1825, las leyes promulgadas allí fueron un verdadero acertijo político. Por un lado, se creó un símbolo patrio (el pabellón) y se declaró la independencia… pero no de Brasil, sino de "todo poder extranjero". Inmediatamente después, una segunda ley proclamaba la unión de la provincia a las demás Provincias Unidas del Río de la Plata.</p>

<br>

<p>"Para entender este entuerto hay que recordar que, hasta bien entrado el siglo XIX, la mentalidad del oriental promedio no anhelaba una patria separada", explica un historiador consultado para este artículo. "La idea federal de Artigas, de ser una provincia más dentro de una confederación argentina, había calado hondo. <i>Nunca quisimos ser un país independiente, sino una parte de nuestro vecino</i>".</p>

<br>

<strong>El verdadero parto: La Convención Preliminar de Paz</strong>

<br><br>

<p>Si el 25 de agosto fue el grito de autonomía, <i>el parto real del Estado uruguayo como entidad jurídicamente reconocida ocurrió el 4 de octubre de 1828</i>. Ese día, en Buenos Aires, Brasil y las Provincias Unidas canjearon las copias de la Convención Preliminar de Paz, un tratado que, aunque "ominoso y degradante" por ser pactado sin la presencia de delegados orientales, dio existencia legal a la República Oriental del Uruguay.</p>

<br>

<p>Fuimos, en esencia, una <i>"marca" fronteriza</i>, un territorio de contención como los que existían en la Edad Media. Esa condición geopolítica fue la que, a la larga, nos condenó a la separación de nuestros hermanos. A partir de entonces, comenzó la titánica tarea de construir no solo un país, sino una idea de nación, forjando mitos y símbolos para dar cohesión a una sociedad que no había buscado deliberadamente su propio camino.</p>

<br>

<strong>Mirar el pasado para entender el presente</strong>

<br><br>

<p>Celebrar el bicentenario es, por lo tanto, mucho más que conmemorar una fecha. <i>Es reconocer nuestra intrincada y poco convencional cuna</i>. Es entender que la nacionalidad no es un destino manifiesto, sino un proceso histórico lleno de aciertos, errores, imposiciones externas y voluntades internas que se entrelazan.</p>

<br>

<p>La verdad histórica, a veces incómoda, es la que nos permite afianzarnos con mayor solidez. Al cumplir 200 años, <i>Uruguay no solo mira con orgullo su trayectoria, sino que también se reconcilia con la complejidad de sus orígenes</i>, asumiendo que la fortaleza de una nación joven reside en su capacidad para entender su pasado con claridad y valentía.</p>

<br>

<p>Por Prof. Manuel Albisu</p>`
        },
        2: {
            title: "La mujer en el Relato de la Historia.",
            image: "/img/historia 1.png",
            content: `<h4>Mujeres en tiempo de la Independencia.</h4>
            
            <br>
            <img src="/img/historia 2.png" alt="Mujeres en la Independencia" style="width:100%; max-height:400px; object-fit:cover; margin:15px 0;">
            <br>

            <p>Nuestra historia de independencia en los libros de Historia menciona nombres de hombres a lo largo de los siglos XIX y XX. Esto se debió a la subjetividad de la época en donde los únicos roles aceptados para una mujer era el de madre abnegada, esposa sumisa. Así mismo, en las diferentes clases sociales, las mujeres de clase social más baja debían de trabajar para sobrevivir.   Pero, déjame contarte que las mujeres han jugado un papel importante en la historia de Uruguay, su rol fue particularmente notable durante la guerra de independencia del país. El género femenino fue relegado a menudo a las sombras, las mujeres uruguayas desempeñaron roles cruciales en la lucha por la independencia; existieron mujeres que cumplieron el rol de lanceras en las fuerzas artiguistas, acompañando a sus hombres en las fuerzas revolucionarias, cocineras, soldadas contribuyendo en el frente de batalla como en la retaguardia.</p>

<br>
<img src="/img/historia 3.png" alt="Mujeres en la Independencia" style="width:100%; max-height:400px; object-fit:cover; margin:15px 0;">
<br>
<img src="/img/historia 4.png" alt="Mujeres en la Independencia" style="width:100%; max-height:400px; object-fit:cover; margin:15px 0;">
<br>

<p>Aunque los nombres de estás mujeres no se mencionan en los libros de historia. Estas mujeres son testimonio del papel crucial que desempeñaron en la lucha por la libertad, actuando con valentía y determinación; ellas fueron valientes y contribuyeron a la formación de la nación actual uruguaya. Muchas de ellas ayudaron en la atención a los heridos, provisión de alimentos y valientemente participaron en combates.
Claro ejemplo, que quiero destacar es el de las “Trece Orientales” que a pesar de dificultades y riesgos movilizaron a la población y desempeñaron un papel activo en la resistencia invasora.
Un ejemplo notable es el de las “Trece Orientales”, un grupo de mujeres que desempeñaron un papel importante en la independencia de Uruguay. A pesar de las dificultades y los riesgos, estas mujeres fueron capaces de movilizar a la población y desempeñar un papel activo en la resistencia contra las fuerzas invasoras. Estos roles desafiaban las normas de género de la época. A pesar de estar sujetas a la visión patriarcal; desafiaron las reglas sociales y demostrando coraje y valor lucharon por la igualdad y la justicia.
Entre las mujeres destacadas se puede mencionar el nombre Dámasa Tanco que es sinónimo de coraje y compasión y que fue una activista social y política; desempeñando un rol crucial en la independencia del Uruguay. Ella; cuando Montevideo fue sitiada por las fuerzas portuguesas, permaneció en la ciudad arriesgando su vida para cuidar heridos y a las personas más vulnerables. Y durante los tiempos de independencia dio refugio a los necesitados, proporcionó alimentos y ayudó a los soldados y heridos. El legado de Dámasa Tanco sigue vive y su historia debe ser contada para que sirva a las nuevas generaciones como inspiración, ella demostró con sus actos que las mujeres pueden ser líderes fuertes y que su nombre es sinónimo de coraje y compasión.  
También no son menos importantes las mujeres que tuvieron un rol vital en el mantenimiento de la economía doméstica, en tiempos coloniales; a menudo su dedicación eran las tareas domésticas, actividades comerciales y productivas además de criar a sus hijos.  Muchas de estas mujeres se dedicaban a la venta de bienes y productos en los mercados locales, contribuyendo así al sustento económico de sus familias.
Otro nombre a destacar es el de Petrona Rosende de Sierra, quien nació en Montevideo en 1806, y se destaca por la lucha incansable de los derechos de las mujeres y la igualdad de género; siendo la fundadora de la primera escuela femenina del país para que la mujer pudiera alcanzar la vida pública y política, desafiando las normas de género de la época. Petrona es conocida por ser una de las primeras feministas de Uruguay y de América Latina y fue galardonada con el título de “Benemérita de la Patria”, además de seguir inspirando a las futuras generaciones por la lucha de la igualdad de derechos.
</p>

<br>

<p>Por Prof. Sandra Baratta</p>`
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
    // FUNCIÓN QUE FALTABA - AGREGAR ESTA FUNCIÓN
    function openArticleModal(articleId) {
        const article = articlesData[articleId];
        if (article) {
            modalBody.innerHTML = `
                <h2>${article.title}</h2>
                <img src="${article.image}" alt="${article.title}" style="width:100%; max-height:400px; object-fit:cover; margin:15px 0;">
                ${article.content}
            `;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Previene scroll del body
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
        document.body.style.overflow = 'auto'; // Restaura scroll
    });
    
    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restaura scroll
        }
    });
});