

// =============================================
// ReKoFum — App JS compartido
// =============================================

// ---- NAVEGACIÓN ----
function goTo(url) { window.location.href = url; }

// ---- HEADER SCROLL ----
window.addEventListener('scroll', () => {
  const h = document.getElementById('header');
  if (h) h.classList.toggle('scrolled', window.scrollY > 40);
});

// ---- MENÚ MÓVIL ----
function toggleMenu() {
  const m = document.getElementById('mobileMenu');
  const t = document.getElementById('menuToggle');
  if (m) m.classList.toggle('open');
  if (t) t.classList.toggle('open');
}

// ---- SEARCH ----
document.addEventListener('DOMContentLoaded', () => {
  const inp = document.getElementById('searchInput');
  const drop = document.getElementById('searchDropdown');
  if (!inp || !drop) return;
  inp.addEventListener('input', () => {
    const q = inp.value.trim().toLowerCase();
    if (q.length < 2) { drop.classList.remove('open'); return; }
    const results = perfumesDB.filter(p =>
      p.nombre.toLowerCase().includes(q) || p.marca.toLowerCase().includes(q)
    ).slice(0, 6);
    const brands = marcasDB.filter(m => m.nombre.toLowerCase().includes(q)).slice(0, 3);
    drop.innerHTML = [
      results.length ? `<div class="sd-group">Perfumes</div>` + results.map(p =>
        `<a href="perfume.html?id=${p.id}" class="sd-item">
          <div class="sd-dot perf"></div>
          <div><strong>${p.nombre}</strong><span>${p.marca}</span></div>
          <span class="sd-rating">${p.rating.toFixed(1)} ★</span>
        </a>`).join('') : '',
      brands.length ? `<div class="sd-group">Marcas</div>` + brands.map(b =>
        `<a href="marca.html?id=${b.id}" class="sd-item">
          <div class="sd-dot brand"></div>
          <div><strong>${b.nombre}</strong><span>${b.pais}</span></div>
        </a>`).join('') : '',
      `<a href="perfumes.html" class="sd-footer">Ver todos los resultados para "${inp.value}" →</a>`
    ].join('');
    drop.classList.add('open');
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#searchBar')) drop.classList.remove('open');
  });
});

// ---- MODALES ----
function openModal(id) {
  document.getElementById(id)?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  document.getElementById(id)?.classList.remove('open');
  document.body.style.overflow = '';
}
function switchTab(btn, tabId) {
  const modal = btn.closest('.modal');
  modal.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
  modal.querySelectorAll('.modal-form').forEach(f => f.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(tabId)?.classList.add('active');
}

// ---- RENDER: TARJETA PERFUME ----
function renderPerfumeCard(p) {
  const stars = renderStars(p.rating);
  return `
    <a href="perfume.html?id=${p.id}" class="perfume-card">
      <div class="pc-bottle" style="background:${p.bottleColor || 'linear-gradient(160deg,#F5EEE4,#D4BC99)'}">
        <div class="pc-shine"></div>
        <div class="pc-label">
          <span>${p.nombre}</span>
        </div>
      </div>
      <div class="pc-info">
        <div class="pc-brand">${p.marca}</div>
        <div class="pc-name">${p.nombre}</div>
        <div class="pc-year">${p.año}</div>
        <div class="pc-rating">${stars} <span>${p.rating.toFixed(1)}</span></div>
        <div class="pc-tags">
          <span class="pc-tag ${p.genero}">${p.genero}</span>
          ${p.familia?.slice(0,1).map(f => `<span class="pc-tag">${f}</span>`).join('') || ''}
        </div>
      </div>
    </a>
  `;
}

function renderCatalog(data, containerId, view = 'grid') {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = data.map(p => renderPerfumeCard(p)).join('');
}

// ---- RENDER ESTRELLAS ----
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let s = '';
  for (let i = 0; i < 5; i++) {
    if (i < full) s += '<span class="star full">★</span>';
    else if (i === full && half) s += '<span class="star half">★</span>';
    else s += '<span class="star empty">☆</span>';
  }
  return `<span class="stars-wrap">${s}</span>`;
}

// ---- HERO SEARCH ----
function heroSearch(val) {
  // Se maneja en buscador principal via searchInput
}

// ---- INDEX: RENDER SECCIONES ----
document.addEventListener('DOMContentLoaded', () => {
  // Trending (más votos)
  const tg = document.getElementById('trendingGrid');
  if (tg) {
    const trending = [...perfumesDB].sort((a,b) => b.votos - a.votos).slice(0,6);
    renderCatalog(trending, 'trendingGrid');
  }

  // Nuevos
  const ng = document.getElementById('newGrid');
  if (ng) {
    const newest = [...perfumesDB].sort((a,b) => b.año - a.año).slice(0,6);
    renderCatalog(newest, 'newGrid');
  }

  // Marcas destacadas
  const bg = document.getElementById('brandsGrid');
  if (bg) {
    bg.innerHTML = marcasDB.slice(0,8).map(m => `
      <a href="marcas.html" class="brand-mini-card">
        <div class="brand-initial-lg">${m.nombre[0]}</div>
        <div class="brand-mini-name">${m.nombre}</div>
        <div class="brand-mini-count">${m.perfumes} perfumes</div>
      </a>
    `).join('');
  }

  // Artículos
  const ag = document.getElementById('articlesGrid');
  if (ag) {
    ag.innerHTML = articulosDB.slice(0,3).map(a => `
      <a href="articulos.html" class="article-card">
        <div class="article-img art-${a.imagen}"></div>
        <div class="article-info">
          <span class="article-cat">${a.categoria}</span>
          <h3 class="article-title">${a.titulo}</h3>
          <p class="article-resumen">${a.resumen}</p>
          <span class="article-fecha">${a.fecha}</span>
        </div>
      </a>
    `).join('');
  }

  // Catálogo inicial
  const cg = document.getElementById('catalogGrid');
  if (cg) renderCatalog(perfumesDB, 'catalogGrid');

  // Marcas página completa se maneja inline
});

