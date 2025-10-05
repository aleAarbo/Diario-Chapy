// Funcionalidad para artículos dinámicos
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('article-modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close');
    const readMoreBtns = document.querySelectorAll('.read-more');
    
    // Datos de ejemplo para los artículos completos
    const articlesData = {
        1: {
            title: "Título Completo del Artículo 1",
            image: "articulo1.jpg",
            content: "<p>Contenido completo del primer artículo. Aquí puedes incluir todo el texto, imágenes y otros elementos que quieras mostrar cuando el usuario haga clic en 'Leer más'.</p><p>Puedes agregar tantos párrafos como necesites para mostrar toda la información.</p>"
        },
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