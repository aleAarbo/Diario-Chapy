document.addEventListener('DOMContentLoaded', function () {
	// Función para cargar un parcial HTML y pegarlo en un selector
	async function loadPartial(selector, url) {
		const container = document.querySelector(selector);
		if (!container) return;
		try {
			const res = await fetch(url, {cache: "no-store"});
			if (!res.ok) throw new Error(`HTTP ${res.status}`);
			const html = await res.text();
			container.innerHTML = html;
			container.setAttribute('aria-hidden', 'false');
		} catch (e) {
			console.warn('No se pudo cargar parcial', url, e);
		}
	}

	// Aplicar nota o texto del footer desde data-attribute
	function applyFooterNote() {
		const body = document.body;
		const note = body.getAttribute('data-footer-note');
		const footerTextEl = document.querySelector('#site-footer .footer-note');
		if (note && footerTextEl) footerTextEl.textContent = note;
	}

	// Mostrar/ocultar vistas sin tocar header/footer
	function showView(viewId, push = true) {
		const main = document.getElementById('main-view');
		const alt = document.getElementById('alt-view');
		if (!main || !alt) return;
		if (viewId === 'alt-view') {
			main.style.display = 'none';
			main.setAttribute('aria-hidden', 'true');
			alt.style.display = '';
			alt.setAttribute('aria-hidden', 'false');
			if (push) history.pushState({view: 'alt'}, '', '#alt');
		} else {
			alt.style.display = 'none';
			alt.setAttribute('aria-hidden', 'true');
			main.style.display = '';
			main.setAttribute('aria-hidden', 'false');
			if (push) history.pushState({view: 'main'}, '', '#');
		}
	}

	// Maneja back/forward del navegador
	window.addEventListener('popstate', (e) => {
		const state = e.state;
		if (!state) {
			showView('main-view', false);
			return;
		}
		if (state.view === 'alt') showView('alt-view', false);
		else showView('main-view', false);
	});

	// ===== SISTEMA DE NAVEGACIÓN DINÁMICA =====
	const navigationSections = [
		{ id: 'main-view', name: 'Inicio', icon: '🏠' },
		{ id: 'bicentenario', name: 'Bicentenario', icon: '🎉' },
		{ id: 'efemerides', name: 'Efemérides', icon: '📅' },
		{ id: 'noticias', name: 'Noticias', icon: '📰' },
		{ id: 'actividades', name: 'Actividades', icon: '🎭' },
		{ id: 'proyectos', name: 'Proyectos', icon: '💡' },
		{ id: 'galeria', name: 'Galería', icon: '🖼️' }
	];

	function createNavigationMenu() {
		const navMenu = document.getElementById('nav-menu');
		if (!navMenu) return;

		navigationSections.forEach(section => {
			const button = document.createElement('button');
			button.className = 'nav-button';
			button.innerHTML = `${section.icon} ${section.name}`;
			button.setAttribute('data-section', section.id);
			
			button.addEventListener('click', () => {
				// Remover clase active de todos los botones
				document.querySelectorAll('.nav-button').forEach(btn => {
					btn.classList.remove('active');
				});
				// Agregar clase active al botón clickeado
				button.classList.add('active');
				
				// Navegar a la sección correspondiente
				if (section.id === 'main-view') {
					showView('main-view');
				} else {
					showView('alt-view');
					loadDynamicGrid(section.id);
				}
				
				// Cerrar menú móvil si está abierto
				if (navMenu.classList.contains('active')) {
					navMenu.classList.remove('active');
				}
			});
			
			navMenu.appendChild(button);
		});
	}

	// ===== SISTEMA DE CUADROS DINÁMICOS =====
	const dynamicContent = {
		'bicentenario': [
			{ title: 'Declaratoria de la Independencia', content: 'Historia completa de la Declaratoria de la Florida en 1825.', author: 'Prof. Manuel Albisu' },
			{ title: 'Cronología del Bicentenario', content: 'Línea de tiempo de los eventos más importantes.', author: 'Departamento de Historia' },
			{ title: 'Símbolos Patrios', content: 'Evolución de los símbolos nacionales uruguayos.', author: 'Prof. Luis Carbonell' },
			{ title: 'Personajes Históricos', content: 'Biografías de los protagonistas de la independencia.', author: 'Equipo Editorial' },
			{ title: 'Legado Cultural', content: 'Influencia del proceso independentista en la cultura uruguaya.', author: 'Prof. Noel Imer' },
			{ title: 'Documentos Originales', content: 'Reproducción y análisis de documentos históricos.', author: 'Archivo Histórico' }
		],
		'efemerides': [
			{ title: 'Septiembre', content: 'Fechas importantes del mes actual.', author: 'Prof. Manuel Albisu' },
			{ title: 'Octubre', content: 'Próximas efemérides del próximo mes.', author: 'Equipo Editorial' },
			{ title: 'Efemérides Nacionales', content: 'Fechas patrias uruguayas.', author: 'Departamento de Historia' },
			{ title: 'Efemérides Internacionales', content: 'Días mundiales e internacionales.', author: 'Prof. Luis Carbonell' },
			{ title: 'Efemérides Científicas', content: 'Eventos importantes en la historia de la ciencia.', author: 'Prof. Noel Imer' },
			{ title: 'Efemérides Culturales', content: 'Fechas relevantes en arte y cultura.', author: 'Departamento de Arte' }
		],
		'noticias': [
			{ title: 'Semana del Bicentenario', content: 'Todas las actividades realizadas en el liceo.', author: 'Prof. Luis Carbonell' },
			{ title: 'Chapicuy en Quebracho', content: 'Participación en jornada del Bicentenario.', author: 'Prof. Noel Imer' },
			{ title: 'Nuevos Proyectos', content: 'Iniciativas educativas para el próximo trimestre.', author: 'Equipo Directivo' },
			{ title: 'Logros Estudiantiles', content: 'Reconocimientos a estudiantes destacados.', author: 'Departamento de Evaluación' },
			{ title: 'Eventos Comunitarios', content: 'Actividades con participación de la comunidad.', author: 'Comisión de Padres' },
			{ title: 'Convocatorias', content: 'Oportunidades y concursos para estudiantes.', author: 'Orientación Vocacional' }
		],
		'actividades': [
			{ title: 'Talleres Culturales', content: 'Programación de talleres extracurriculares.', author: 'Departamento de Arte' },
			{ title: 'Deportes', content: 'Actividades y competencias deportivas.', author: 'Departamento de Educación Física' },
			{ title: 'Salidas Educativas', content: 'Próximas visitas y excursiones planificadas.', author: 'Coordinación Académica' },
			{ title: 'Ferias Científicas', content: 'Preparación para ferias y exposiciones.', author: 'Departamento de Ciencias' },
			{ title: 'Concursos Literarios', content: 'Competencias de escritura y lectura.', author: 'Departamento de Literatura' },
			{ title: 'Voluntariado', content: 'Oportunidades de servicio comunitario.', author: 'Comisión Solidaria' }
		],
		'proyectos': [
			{ title: 'Huerta Escolar', content: 'Desarrollo y mantenimiento de la huerta educativa.', author: 'Club de Ciencias' },
			{ title: 'Periódico Digital', content: 'Evolución y planes futuros de Ysapy.', author: 'Equipo Editorial' },
			{ title: 'Radio Estudiantil', content: 'Proyecto de comunicación institucional.', author: 'Departamento de Comunicación' },
			{ title: 'Reciclaje', content: 'Iniciativas ambientales y de sustentabilidad.', author: 'Comisión Ambiental' },
			{ title: 'Tecnología Educativa', content: 'Incorporación de nuevas tecnologías.', author: 'Departamento de Informática' },
			{ title: 'Intercambios', content: 'Programas de intercambio cultural.', author: 'Relaciones Internacionales' }
		],
		'galeria': [
			{ title: 'Fotos del Bicentenario', content: 'Galería completa de imágenes de los eventos.', author: 'Equipo de Fotografía' },
			{ title: 'Trabajos Estudiantiles', content: 'Exposición de proyectos y creaciones.', author: 'Departamento de Arte' },
			{ title: 'Eventos Anteriores', content: 'Archivo fotográfico de actividades pasadas.', author: 'Archivo Histórico' },
			{ title: 'Infografías', content: 'Material visual educativo creado por estudiantes.', author: 'Club de Diseño' },
			{ title: 'Videos Institucionales', content: 'Registro audiovisual de actividades.', author: 'Equipo Audiovisual' },
			{ title: 'Arte Digital', content: 'Creaciones artísticas en formato digital.', author: 'Taller de Arte Digital' }
		]
	};

	function loadDynamicGrid(sectionId) {
		const gridContainer = document.getElementById('dynamic-grid');
		const altHeader = document.querySelector('.alt-header h2');
		
		if (!gridContainer) return;
		
		// Actualizar título de la sección
		const section = navigationSections.find(s => s.id === sectionId);
		if (section && altHeader) {
			altHeader.textContent = section.name;
		}
		
		// Limpiar grid existente
		gridContainer.innerHTML = '';
		
		// Obtener contenido para la sección
		const content = dynamicContent[sectionId] || [];
		
		// Crear cuadros dinámicos
		content.forEach((item, index) => {
			const box = document.createElement('div');
			box.className = 'alt-box column is-one-third js-article';
			box.setAttribute('data-article-id', `${sectionId}-${index}`);
			box.setAttribute('data-article-title', item.title);
			box.setAttribute('data-article-content', item.content);
			box.setAttribute('data-article-author', item.author);
			
			box.innerHTML = `
				<h3>${item.title}</h3>
				<p class="excerpt">${item.content}</p>
				<small><strong>Autor:</strong> ${item.author}</small>
			`;
			
			gridContainer.appendChild(box);
		});
		
		// Re-activar los event listeners para los nuevos artículos
		activateArticleListeners();
	}

	function activateArticleListeners() {
		const articleEls = document.querySelectorAll('.js-article');
		articleEls.forEach(el => {
			// Remover event listeners existentes para evitar duplicados
			el.replaceWith(el.cloneNode(true));
		});
		
		// Volver a obtener los elementos y agregar listeners
		const newArticleEls = document.querySelectorAll('.js-article');
		newArticleEls.forEach(el => {
			el.addEventListener('click', (e) => {
				if (e.target && (e.target.closest('a') || e.target.closest('button'))) return;
				showArticleFromElement(el);
			});
			el.setAttribute('role', 'button');
			el.setAttribute('tabindex', '0');
			el.addEventListener('keydown', (e) => {
				if (e.key === 'Enter' || e.key === ' ') { 
					e.preventDefault(); 
					showArticleFromElement(el); 
				}
			});
		});
	}

	// ===== MENÚ MÓVIL =====
	function setupMobileMenu() {
		const navToggle = document.getElementById('nav-toggle');
		const navMenu = document.getElementById('nav-menu');
		
		if (navToggle && navMenu) {
			navToggle.addEventListener('click', () => {
				navMenu.classList.toggle('active');
			});
		}
	}

	// ===== SISTEMA DE ARTÍCULOS =====
	function showArticleFromElement(el, push = true) {
		const articleView = document.getElementById('article-view');
		const articleTitle = document.getElementById('article-title');
		const articleContent = document.getElementById('article-content');
		
		if (!el || !articleView) return;
		
		const id = el.dataset.articleId || '';
		const title = el.dataset.articleTitle || '';
		const content = el.dataset.articleContent || el.dataset.articleFull || '';
		const author = el.dataset.articleAuthor || '';
		
		articleTitle.textContent = title;
		articleContent.innerHTML = `
			<div class="content">
				${content}
				${author ? `<footer><p><strong>Autor:</strong> ${author}</p></footer>` : ''}
			</div>
		`;
		
		// Mostrar vista de artículo
		articleView.style.display = '';
		articleView.setAttribute('aria-hidden', 'false');
		
		// Ocultar otras vistas
		const main = document.getElementById('main-view');
		const alt = document.getElementById('alt-view');
		if (main) { main.style.display = 'none'; main.setAttribute('aria-hidden','true'); }
		if (alt) { alt.style.display = 'none'; alt.setAttribute('aria-hidden','true'); }
		
		// History
		if (push) history.pushState({view:'article', id}, '', '#article-' + id);
		
		// Focus para accesibilidad
		const closeArticleBtn = document.getElementById('close-article');
		closeArticleBtn && closeArticleBtn.focus();
	}

	function closeArticle(push = true) {
		const articleView = document.getElementById('article-view');
		if (!articleView) return;
		
		articleView.style.display = 'none';
		articleView.setAttribute('aria-hidden', 'true');
		
		// Restaurar vista basada en hash/state
		const main = document.getElementById('main-view');
		const alt = document.getElementById('alt-view');
		
		if (location.hash === '#alt' || (history.state && history.state.view === 'alt')) {
			if (alt) { alt.style.display = ''; alt.setAttribute('aria-hidden','false'); }
			if (main) { main.style.display = 'none'; main.setAttribute('aria-hidden','true'); }
		} else {
			if (main) { main.style.display = ''; main.setAttribute('aria-hidden','false'); }
			if (alt) { alt.style.display = 'none'; alt.setAttribute('aria-hidden','true'); }
		}
		
		if (push) history.pushState({view:'main'}, '', '#');
	}

	// ===== SISTEMA DE IMPRESIÓN =====
	function printAllArticles() {
		const articles = Array.from(document.querySelectorAll('.js-article')).map(el => {
			const imgEl = el.querySelector('img');
			return {
				id: el.dataset.articleId || '',
				title: el.dataset.articleTitle || (el.querySelector('h1,h2,h3') ? el.querySelector('h1,h2,h3').textContent.trim() : 'Sin título'),
				content: el.dataset.articleFull || el.innerHTML,
				image: el.dataset.articleImage || (imgEl ? imgEl.src : '')
			};
		});

		if (!articles.length) {
			alert('No hay artículos para imprimir.');
			return;
		}

		const printWindow = window.open('', '_blank');
		if (!printWindow) {
			alert('No se pudo abrir la ventana de impresión. Revisa tu bloqueo de pop-ups.');
			return;
		}

		const docHtml = `
			<!DOCTYPE html>
			<html>
			<head>
				<title>Imprimir - Periódico Digital Ysapy</title>
				<style>
					body { font-family: Arial, sans-serif; margin: 20px; }
					.article { margin-bottom: 30px; page-break-inside: avoid; }
					.article h2 { color: #2c5e5a; border-bottom: 2px solid #2c5e5a; padding-bottom: 5px; }
					.article img { max-width: 100%; height: auto; }
					@media print {
						.article { page-break-inside: avoid; }
					}
				</style>
			</head>
			<body>
				<h1>Periódico Digital Ysapy - Liceo de Chapicuy</h1>
				${articles.map(article => `
					<article class="article">
						<h2>${article.title}</h2>
						${article.image ? `<img src="${article.image}" alt="${article.title}">` : ''}
						<div>${article.content}</div>
					</article>
				`).join('')}
			</body>
			</html>
		`;

		printWindow.document.open();
		printWindow.document.write(docHtml);
		printWindow.document.close();
		
		setTimeout(() => {
			printWindow.print();
		}, 500);
	}

	// ===== INICIALIZACIÓN =====
	Promise.all([
		loadPartial('#site-header', 'partials/header.html'),
		loadPartial('#site-footer', 'partials/footer.html')
	]).then(() => {
		applyFooterNote();

		// Inicializar sistemas
		createNavigationMenu();
		setupMobileMenu();
		activateArticleListeners();

		// Inicializar vista según hash o estado
		if (location.hash === '#alt') {
			history.replaceState({view: 'alt'}, '', '#alt');
			showView('alt-view', false);
		} else {
			history.replaceState({view: 'main'}, '', '#');
			showView('main-view', false);
		}

		// Event listeners básicos
		const closeArticleBtn = document.getElementById('close-article');
		if (closeArticleBtn) closeArticleBtn.addEventListener('click', () => closeArticle());

		const printBtn = document.getElementById('print-all');
		if (printBtn) printBtn.addEventListener('click', printAllArticles);

		// Manejar popstate para restaurar vistas
		window.addEventListener('popstate', (e) => {
			const state = e.state;
			if (!state) {
				closeArticle(false);
				showView('main-view', false);
				return;
			}
			if (state.view === 'article') {
				const el = document.querySelector(`[data-article-id="${state.id}"]`);
				if (el) showArticleFromElement(el, false);
				else closeArticle(false);
			} else if (state.view === 'alt') {
				closeArticle(false);
				showView('alt-view', false);
			} else {
				closeArticle(false);
				showView('main-view', false);
			}
		});
	});
});