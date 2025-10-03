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

	// Aplicar imagen del header a partir de data-attribute en body
	function applyHeaderImage() {
		const body = document.body;
		const imgSrc = body.getAttribute('data-header-img');
		const headerImg = document.querySelector('#site-header img#site-logo');
		if (imgSrc && headerImg) headerImg.src = imgSrc;
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

	// Cargar header/footer y luego aplicar dinámicas
	Promise.all([
		loadPartial('#site-header', 'partials/header.html'),
		loadPartial('#site-footer', 'partials/footer.html')
	]).then(() => {
		applyHeaderImage();
		applyFooterNote();

		// Inicializar vista según hash o estado
		if (location.hash === '#alt') {
			history.replaceState({view: 'alt'}, '', '#alt');
			showView('alt-view', false);
		} else {
			history.replaceState({view: 'main'}, '', '#');
			showView('main-view', false);
		}

		const img = document.getElementById('hero-img');
		const video = document.getElementById('sample-video');

		if (img) {
			// Mejora accesibilidad: si la imagen falla, añadir alt visible
			img.addEventListener('error', () => {
				img.style.display = 'none';
				const msg = document.createElement('div');
				msg.textContent = 'Imagen no disponible';
				msg.style.color = '#a00';
				img.parentNode.appendChild(msg);
			});

			// Ejemplo simple: al hacer click en la imagen, reproducir/pausar video
			img.addEventListener('click', () => {
				if (!video) return;
				if (video.paused) video.play();
				else video.pause();
			});
		}

		// Detectar reproducción en móvil y log para debug
		if (video) {
			video.addEventListener('play', () => console.log('Video: play'));
			video.addEventListener('pause', () => console.log('Video: pause'));
			video.addEventListener('error', (e) => console.warn('Video error', e));
		}

		// Eventos para botones de navegación entre vistas
		const openAltBtn = document.getElementById('open-alt');
		const backMainBtn = document.getElementById('back-main');
		if (openAltBtn) openAltBtn.addEventListener('click', () => showView('alt-view'));
		if (backMainBtn) backMainBtn.addEventListener('click', () => showView('main-view'));

		// ---------- NUEVO: abrir noticia completa desde cualquier contenedor ----------
		const articleView = document.getElementById('article-view');
		const articleTitle = document.getElementById('article-title');
		const articleContent = document.getElementById('article-content');
		const closeArticleBtn = document.getElementById('close-article');

		function showArticleFromElement(el, push = true) {
			if (!el || !articleView) return;
			const id = el.dataset.articleId || '';
			const title = el.dataset.articleTitle || el.getAttribute('data-article-title') || '';
			const excerpt = el.dataset.articleExcerpt || '';
			const full = el.dataset.articleFull || excerpt || (el.innerHTML || '');
			articleTitle.textContent = title;
			articleContent.innerHTML = full;
			// reveal article view
			articleView.style.display = '';
			articleView.setAttribute('aria-hidden', 'false');
			// hide main and alt but keep header/footer
			const main = document.getElementById('main-view');
			const alt = document.getElementById('alt-view');
			if (main) { main.style.display = 'none'; main.setAttribute('aria-hidden','true'); }
			if (alt) { alt.style.display = 'none'; alt.setAttribute('aria-hidden','true'); }
			// history
			if (push) history.pushState({view:'article', id}, '', '#article-' + id);
			// focus for accessibility
			closeArticleBtn && closeArticleBtn.focus();
		}

		function closeArticle(push = true) {
			if (!articleView) return;
			articleView.style.display = 'none';
			articleView.setAttribute('aria-hidden', 'true');
			// restore view based on hash/state
			const main = document.getElementById('main-view');
			const alt = document.getElementById('alt-view');
			// prefer previous hash
			if (location.hash === '#alt' || history.state && history.state.view === 'alt') {
				if (alt) { alt.style.display = ''; alt.setAttribute('aria-hidden','false'); }
				if (main) { main.style.display = 'none'; main.setAttribute('aria-hidden','true'); }
			} else {
				if (main) { main.style.display = ''; main.setAttribute('aria-hidden','false'); }
				if (alt) { alt.style.display = 'none'; alt.setAttribute('aria-hidden','true'); }
			}
			if (push) history.pushState({view:'main'}, '', '#');
		}

		// bind click on all article elements
		const articleEls = document.querySelectorAll('.js-article');
		articleEls.forEach(el => {
			el.addEventListener('click', (e) => {
				// avoid triggering when clicking links/buttons inside
				if (e.target && (e.target.closest('a') || e.target.closest('button'))) return;
				showArticleFromElement(el);
			});
			el.setAttribute('role', 'button');
			el.setAttribute('tabindex', '0');
			el.addEventListener('keydown', (e) => {
				if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); showArticleFromElement(el); }
			});
		});

		// close article button
		if (closeArticleBtn) closeArticleBtn.addEventListener('click', () => closeArticle());

		// handle popstate to restore article/main/alt
		window.addEventListener('popstate', (e) => {
			const state = e.state;
			if (!state) {
				// fallback to main
				closeArticle(false);
				showView('main-view', false);
				return;
			}
			if (state.view === 'article') {
				// try to find element by id
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
		// ---------- FIN NUEVO ----------

		// ---------- NUEVO: imprimir todos los artículos con imágenes y estilos de la web ----------
		function gatherArticlesForPrint() {
			const els = Array.from(document.querySelectorAll('.js-article'));
			return els.map(el => {
				const imgEl = el.querySelector('img');
				return {
					id: el.dataset.articleId || '',
					title: el.dataset.articleTitle || (el.querySelector('h1,h2,h3') ? el.querySelector('h1,h2,h3').textContent.trim() : 'Sin título'),
					excerpt: el.dataset.articleExcerpt || (el.querySelector('.excerpt') ? el.querySelector('.excerpt').innerHTML : ''),
					full: el.dataset.articleFull || (el.querySelector('.content') ? el.querySelector('.content').innerHTML : ''),
					image: el.dataset.articleImage || (imgEl ? imgEl.src : '')
				};
			});
		}

		function buildPrintableDocumentHtml(articles) {
			// incluye Bulma, Google Fonts y tu css local para mantener el mismo look
			const head = `
				<meta charset="utf-8">
				<meta name="viewport" content="width=device-width,initial-scale=1">
				<title>Imprimir — ${document.title}</title>
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Merriweather:wght@700;900&display=swap" rel="stylesheet">
				<link rel="stylesheet" href="css/style.css">
				<style>
					/* ajustes de impresión: añadir saltos de página y evitar cortar artículos */
					@media print {
						.article { page-break-inside: avoid; }
						.page-break { page-break-after: always; }
					}
					body { background: #fff; color: #111; padding: 20px; }
					.masthead { margin-bottom: 18px; }
					.article { margin-bottom: 28px; }
					.article h2 { font-family: "Merriweather", serif; font-size: 20px; margin: 0 0 6px; }
				</style>
			`;
			// clona header (masthead) si existe
			const mast = document.querySelector('.site-header-inner');
			const mastHtml = mast ? mast.outerHTML : `<header class="masthead"><h1>${document.title}</h1></header>`;

			let body = `<body><div class="container printable-doc">`;
			body += `<header class="masthead">${mastHtml}</header>`;

			articles.forEach((a, i) => {
				body += `<article class="article" id="article-${escapeHtml(a.id)}">`;
				body += `<h2>${escapeHtml(a.title)}</h2>`;
				if (a.image) body += `<figure class="image"><img src="${escapeHtml(a.image)}" alt=""></figure>`;
				if (a.full) body += `<div class="content">${a.full}</div>`;
				else if (a.excerpt) body += `<div class="excerpt">${a.excerpt}</div>`;
				else body += `<div class="excerpt">Sin contenido</div>`;
				body += `</article>`;
				if (i !== articles.length - 1) body += `<div class="page-break"></div>`;
			});

			body += `</div></body>`;
			return `<!doctype html><html>${head}${body}</html>`;
		}

		function escapeHtml(str) {
			return String(str || '').replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
		}

		function printAllArticles() {
			const articles = gatherArticlesForPrint();
			if (!articles.length) {
				alert('No hay artículos para imprimir.');
				return;
			}
			const docHtml = buildPrintableDocumentHtml(articles);
			const w = window.open('', '_blank');
			if (!w) {
				alert('No se pudo abrir la ventana de impresión. Revisa tu bloqueo de pop-ups.');
				return;
			}
			w.document.open();
			w.document.write(docHtml);
			w.document.close();
			// espera a que todo cargue (imágenes, css) antes de imprimir
			const doPrint = () => {
				try { w.focus(); w.print(); } catch (e) { console.warn('Print failed', e); }
			};
			// usar onload del nuevo window o fallback timeout
			if (w.document.readyState === 'complete') {
				setTimeout(doPrint, 500);
			} else {
				w.addEventListener('load', () => setTimeout(doPrint, 350));
				// fallback por si load no se dispara
				setTimeout(doPrint, 2500);
			}
		}

		// conectar el botón de imprimir (cargado en parcial header)
		const printBtn = document.getElementById('print-all');
		if (printBtn) printBtn.addEventListener('click', printAllArticles);
		// ---------- FIN NUEVO ----------
	});
});
